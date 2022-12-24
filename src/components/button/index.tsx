import React, { FC } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

export const Button: FC<TouchableOpacityProps> = ({ children, ...args }) => {
  return (
    <View className="relative">
      <TouchableOpacity {...args}>
        <View className="flex items-center justify-center bg-primary-1  py-2 px-4 rounded-[100px]">
          <Text className="text-white font-bold">{children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
