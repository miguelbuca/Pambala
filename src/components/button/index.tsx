import { Feather } from "@expo/vector-icons";
import React, { FC } from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

export const Button: FC<TouchableOpacityProps & { icon?: FeatherIcon }> = ({
  icon,
  children,
  style,
  ...args
}) => {
  return (
    <View className="relative">
      <TouchableOpacity {...args}>
        <View
          style={style}
          className="flex items-center justify-center bg-primary-1 h-[45px]   py-2 px-4 rounded-[100px]"
        >
          <Text className="flex flex-row items-center text-white font-bold">
            {icon ? (
              <View className="flex items-center justify-center mb-[-3px]">
                <Text className="text-white mr-1">
                  <Feather size={16} name={icon} />
                </Text>
              </View>
            ) : null}
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
