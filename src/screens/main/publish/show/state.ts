import { useNavigation } from "@react-navigation/native";

export const useShowPublicationState = () => {
  const navigation = useNavigation();

  return { navigation };
};
