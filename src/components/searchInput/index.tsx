import React, { FC } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "../../../tailwind.config";

export const SearchInput: FC<Omit<TextInputProps, "placeholderTextColor">> = ({
  ...args
}) => {
  return (
    <View className="relative">
      <TextInput
        placeholderTextColor={theme.extend.colors.secondary[1]}
        className="bg-secondary-3 dark:bg-secondary-2 h-[42px] px-8 rounded-xl"
        {...args}
      />
      <View className="absolute bottom-3 left-2">
        <Feather
          color={theme.extend.colors.secondary[1]}
          name="search"
          size={16}
        />
      </View>
    </View>
  );
};
