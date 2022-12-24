import { useRef } from "react";
import { Modalize } from "react-native-modalize";

export const usePostsState = () => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return { modalizeRef, onOpen };
};
