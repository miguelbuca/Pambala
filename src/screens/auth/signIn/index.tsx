import { Button } from "components/button";
import { PhoneInput } from "components/phoneInput";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSignInState } from "./state";

export const SignIn = () => {
  const { next, phoneInputHandler } = useSignInState();
  return (
    <View className="flex flex-1 p-4">
      <ScrollView className="flex-1">
        <View className="h-[100px] justify-center">
          <Text className="font-bold text-[18px]">
            Número de telefone portátil
          </Text>
        </View>
        <View className="mb-4">
          <Text>
            Para sua segurança, um código de segurança será enviado a você.
          </Text>
        </View>
        <View>
          <PhoneInput onChange={phoneInputHandler} />
        </View>
      </ScrollView>
      <View>
        <Button onPress={next}>
          <Text className="font-semibold text-[18px]">Prosseguir</Text>
        </Button>
      </View>
    </View>
  );
};
