import { StackActions, useNavigation } from "@react-navigation/native";
import {
  getAuth,
  onAuthStateChanged,
  updateProfile,
  UserInfo,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useCallback, useState } from "react";
import * as RNImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const useEditProfileState = () => {
  const auth = getAuth();
  const storage = getStorage();
  const navigation = useNavigation();
  const [uid, setUid] = useState("");
  const [user, setUser] = useState<
    Pick<UserInfo, "displayName" | "email" | "photoURL">
  >({
    displayName: null,
    email: null,
    photoURL: null,
  });
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [image, setImage] = useState<string>();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setPhoneNumber(user.phoneNumber);
      setUid(user.uid);
    } else {
      navigation.dispatch(
        StackActions.replace("Auth", {
          screen: "SignIn",
        })
      );
    }
  });
  const pickImage = useCallback(async () => {
    // No permissions request is necessary for launching the image library
    let result = await RNImagePicker.launchImageLibraryAsync({
      mediaTypes: RNImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      //base64: true,
      selectionLimit: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }, []);

  const uploadImage = async () => {
    if (!image) return;
    const { currentUser } = auth;
    const fileName = image?.substring(image.lastIndexOf("/") + 1);

    const storageRef = ref(storage, `images/${uid}/${fileName}`);
    const response = await fetch(image);
    const blob = await response.blob();

    uploadBytes(storageRef, blob).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setUser({
          ...user,
          photoURL: url,
        });
        currentUser &&
          updateProfile(currentUser, user)
            .then(() => {
              StackActions.replace("Main", {
                screen: "Home",
              });
            })
            .catch(() =>
              Alert.alert("Subscrição", "A atualização do usuário falhou")
            );
      });
    });
  };

  const completeProfileHandler = () => {
    uploadImage();
  };

  return {
    phoneNumber,
    image,
    user,
    pickImage,
    setUser,
    completeProfileHandler,
  };
};
