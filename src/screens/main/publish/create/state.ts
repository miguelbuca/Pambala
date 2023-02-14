import { useCallback, useEffect, useState } from "react";
import * as RNImagePicker from "expo-image-picker";
import * as database from "firebase/database";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "context/auth";
import { useLoader } from "context/loader";
import { useNavigation } from "@react-navigation/native";

export const usePublishCreateState = () => {
  const navigation = useNavigation();
  const storage = getStorage();
  const [images, setImages] = useState<RNImagePicker.ImagePickerAsset[] | null>(
    []
  );
  const { user } = useAuth();
  const { setLoader } = useLoader();

  const db = database.getDatabase();
  const [downloadURLImage, setdownloadURLImage] = useState<string[]>([]);

  const [publication, setPublication] = useState<
    Publication<RNImagePicker.ImagePickerAsset[]>
  >({
    amount: 0,
    uid: user?.uid as Pick<User, "uid">,
  });

  const pickImage = useCallback(async () => {
    // No permissions request is necessary for launching the image library
    let result = await RNImagePicker.launchImageLibraryAsync({
      mediaTypes: RNImagePicker.MediaTypeOptions.Images,
      //allowsEditing: true,
      //aspect: [4, 4],
      quality: 1,
      allowsMultipleSelection: true,
      //base64: true,
      selectionLimit: 4,
    });

    if (!result.cancelled) {
      setImages(result.assets);
    }
  }, []);

  const uploadImage = async (
    image: string,
    index: number,
    arr: RNImagePicker.ImagePickerAsset[]
  ) => {
    setLoader(true, `Enviando as imagens`);
    const fileName = image?.substring(image.lastIndexOf("/") + 1);

    const storageRef = ref(
      storage,
      `images/${user?.uid}/publication/${fileName}`
    );
    const response = await fetch(image);
    const blob = await response.blob();

    uploadBytes(storageRef, blob).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const assets = [...downloadURLImage, url];
        /**
         * Check if all ``assets url`` are generated
         */
        if (arr.length === assets.length) {
          setLoader(true, `Finalizando a Publicação 😃`);
          const { ref, set } = database;

          const uuid = uuidv4();

          set(ref(db, `publication/${uuid}`), {
            uuid,
            ...publication,
            assets,
          }).finally(() => {
            setLoader(false);
            navigation.goBack();
          });
        }
      });
    });
  };

  const createHandler = () => {
    if (images?.length)
      images?.map(({ uri }, index, arr) => uploadImage(uri, index, arr));
    else {
      const { ref, set } = database;

      set(ref(db, `publication/${uuidv4()}`), {
        ...publication,
        assets: [],
      }).finally(() => {
        setLoader(false);
        navigation.goBack();
      });
    }
  };

  return {
    publication,
    images,
    pickImage,
    setPublication,
    createHandler,
  };
};
