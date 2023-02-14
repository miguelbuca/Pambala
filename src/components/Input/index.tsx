import { Feather } from "@expo/vector-icons";
import React, { FC } from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import CurrencyInput, { CurrencyInputProps } from "react-native-currency-input";
import { theme } from "../../../tailwind.config";

export const Input: FC<
  Omit<TextInputProps, "placeholderTextColor"> & {
    icon?: FeatherIcon;
    currency?: CurrencyInputProps;
  }
> = ({ icon, className, currency, ...args }) => {
  return (
    <View className="relative my-[10px] ">
      {!!!currency ? (
        <TextInput
          placeholderTextColor={theme.extend.colors.secondary[1]}
          className={`bg-secondary-3 dark:bg-secondary-2 h-[45px] px-8 rounded-xl py-[15px] ${className}`}
          {...args}
        />
      ) : (
        <CurrencyInput
          placeholderTextColor={theme.extend.colors.secondary[1]}
          className={`bg-secondary-3 dark:bg-secondary-2 h-[45px] px-8 rounded-xl py-[15px] ${className}`}
          delimiter="."
          separator=","
          precision={2}
          minValue={0}
          {...currency}
        />
      )}
      {icon ? (
        <View className="absolute left-[10px] top-[14px]">
          <Text className="text-secondary-1">
            <Feather size={16} name={icon} />
          </Text>
        </View>
      ) : null}
    </View>
  );
};
