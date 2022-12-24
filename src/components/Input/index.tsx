import React, { FC } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { theme } from "../../../tailwind.config";

export const Input: FC<Omit<TextInputProps, "placeholderTextColor">> = ({
  ...args
}) => {
  return (
    <View className="relative">
      <TextInput
        placeholderTextColor={theme.extend.colors.secondary[1]}
        className="bg-secondary-3 dark:bg-secondary-2 h-[42px] px-8 rounded-xl"
        {...args}
      />
    </View>
  );
};
