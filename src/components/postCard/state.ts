import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth";
import { useCallback } from "react";

export const usePostCardState = () => {
  const navigation = useNavigation();

  const getUserByUid = useCallback((uid: string) => {}, []);

  const chatHandler = (user: User) => {
    navigation.navigate(
      "Chat" as never,
      {
        screen: "List",
        params: {
          to: user,
        },
      } as never
    );
  };
  return { chatHandler };
};
