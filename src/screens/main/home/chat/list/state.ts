import { useRoute } from "@react-navigation/native";

export const useListState = () => {
  const { params } = useRoute();

  return { params };
};
