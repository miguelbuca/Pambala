import { View, Text, Image, Pressable } from "react-native";
import React, { FC } from "react";
import { useUserChatCardState } from "./state";

export const UserChartCard: FC<User> = ({ id, avatar }) => {
  const { handler } = useUserChatCardState();
  return (
    <Pressable
      onPress={() => handler(id)}
      className="flex flex-row p-4 items-center"
    >
      <View className="relative mr-2">
        <Image
          className="rounded-full h-[50px] w-[50px]"
          source={avatar ? avatar : require("../../../assets/avatar.png")}
        />
        <View className="absolute bottom-0 right-0 border-2 border-white w-4 h-4 rounded-full bg-green-500" />
      </View>
      <View className="flex flex-col flex-1 justify-center">
        <Text className="font-semibold">Miguel</Text>
        <Text className="max-w-full break-words opacity-50">
          Aqui vai aparecer a sms enviada com.sdfsdf..
        </Text>
      </View>
      <View>
        <View className="flex h-[25px] w-[25px] items-center justify-center bg-primary-1 p-1 rounded-full">
          <Text className="text-white text-[10px]">3</Text>
        </View>
      </View>
    </Pressable>
  );
};
