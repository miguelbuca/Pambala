import { View, Text } from "react-native";
import React from "react";
import { useShowPublicationState } from "./state";
import { useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native";
import { theme } from "tailwind.config";
import Feather from "@expo/vector-icons/Feather";

export const Show = () => {
  const { navigation } = useShowPublicationState();

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      headerTitle: "IPHONE X",
      headerRight: () => (
        <TouchableOpacity>
          <Feather
            name="message-square"
            color={theme.extend.colors.primary[1]}
            size={20}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View>
      <Text>Show</Text>
    </View>
  );
};
