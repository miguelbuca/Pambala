import { useNavigation } from "@react-navigation/native";

export const usePostCardState = () => {
  const navigation = useNavigation();

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
