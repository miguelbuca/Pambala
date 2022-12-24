import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { Input } from "..";
import Feather from "@expo/vector-icons/Feather";
import { useQuickMessageCardState } from "./state";

export const QuickMessageCard: FC<User & { display?: boolean }> = ({
  avatar,
  display,
}) => {
  const { show, hiddenHandler } = useQuickMessageCardState(display);

  return show ? (
    <View className="p-4 m-4 rounded-[20px] bg-primary-1">
      <View className="flex flex-row mb-4">
        <View className="mr-2">
          <Image
            className="rounded-full h-[50px] w-[50px]"
            source={avatar ? avatar : require("../../../assets/avatar.png")}
          />
        </View>
        <View className="flex flex-col flex-1 justify-center">
          <Text className="text-white font-extrabold text-[20px]">Miguel</Text>
          <Text className="text-secondary-3">@miguelbuca</Text>
        </View>
        <View>
          <TouchableOpacity onPress={hiddenHandler}>
            <Text className="text-white">
              <Feather size={22} name="trash-2" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex flex-row">
        <View className="flex-1">
          <Input placeholder="Escrever mensagem" />
        </View>
        <View className="ml-2">
          <TouchableOpacity>
            <View className="flex items-center justify-center bg-white p-2 rounded-full">
              <Text className="text-primary-1">
                <Feather size={22} name="send" />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  ) : null;
};
