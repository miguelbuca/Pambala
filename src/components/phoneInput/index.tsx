import { View, Image } from "react-native";
import React, { FC, useRef } from "react";
import RNPhoneInput from "react-native-phone-input";
import { Feather } from "@expo/vector-icons";

export const PhoneInput: FC<{
  onChange?: (displayValue: string, iso2: string) => void;
}> = ({ onChange }) => {
  const ref = useRef<any>();
  return (
    <View className="relative flex flex-row items-center border-[#f5f5f5] border-[1.5px] rounded-[8px]">
      <RNPhoneInput
        autoFormat
        confirmText="Confirmar"
        cancelText="Cancelar"
        initialCountry="ao"
        textProps={{
          clearButtonMode: "while-editing",
        }}
        renderFlag={({ imageSource }) => {
          return (
            <View className="flex flex-row items-center p-[8px] border-r-[1.5px] border-r-[#f5f5f5]">
              <Image source={imageSource} className="w-[30px] h-[20px]" />
              <View className="ml-2">
                <Feather name="chevron-down" />
              </View>
            </View>
          );
        }}
        onChangePhoneNumber={onChange}
        ref={ref}
      />
    </View>
  );
};
