import { Button, OtpInput } from "components/index";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { useOtpState } from "./state";

export const Otp = () => {
  const { params, otpHandler, sendOTP } = useOtpState();
  return (
    <View className="flex flex-1 p-4">
      <ScrollView className="flex-1">
        <View className="h-[100px] justify-center">
          <Text className="font-bold text-[18px]">Código de Segurança</Text>
        </View>
        <View>
          <Text>Digite o código de segurança enviado para:</Text>
        </View>
        <View className="my-4">
          <Text className="text-[16px] text-secondary-1 font-semibold">
            {params?.phoneNumber}
          </Text>
        </View>
        <View className="mt-4">
          <OtpInput
            onChange={otpHandler}
            size={6}
            separatorValue={0}
            type={"multiple"}
          />
        </View>
      </ScrollView>
      <View className="flex flex-col">
        <View>
          <Button onPress={sendOTP}>
            <Text className="font-semibold text-[18px]">Verificar código</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};
