import { useNavigation, useRoute } from "@react-navigation/native";
import { useHelperRoutes } from "context/helperRoutes";

export const useUserChatCardState = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { setOld } = useHelperRoutes();

  const handler = (userID?: string) => {
    setOld(route.name);
    navigation.navigate(
      "Message" as never,
      {
        userID,
      } as never
    );
  };
  return {
    handler,
  };
};
