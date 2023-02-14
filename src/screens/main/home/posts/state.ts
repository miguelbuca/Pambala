import { useNavigation, useRoute } from "@react-navigation/native";
import { useHelperRoutes } from "context/helperRoutes";
import { useEffect, useMemo, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import * as RNImagePicker from "expo-image-picker";

import { getDatabase, ref, onValue } from "firebase/database";

export const usePostsState = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const modalizeRef = useRef<Modalize>(null);
  const { setOld } = useHelperRoutes();
  const title = "Posts";

  const db = getDatabase();

  const [publication, setPublication] = useState<
    SnapshotVal<Publication<string[]>>
  >({});

  const publicationRef = ref(db, "publication");

  useMemo(
    () =>
      onValue(
        publicationRef,
        (snapshot) => {
          console.log(snapshot);
          setPublication(snapshot.val());
        },
        {
          onlyOnce: false,
        }
      ),
    []
  );

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const publishHandler = () => {
    setOld(title);
    navigation.navigate(
      "PublicationRoutes" as never,
      {
        screen: "Create",
      } as never
    );
  };

  const showPublicationHandler = (post: any) => {
    setOld(title);
    navigation.navigate(
      "PublicationRoutes" as never,
      {
        screen: "Show",
        params: {
          post,
        },
      } as never
    );
  };

  return {
    publication,
    modalizeRef,
    onOpen,
    publishHandler,
    showPublicationHandler,
  };
};
