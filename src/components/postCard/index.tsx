import React, { FC } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { PostCardProps } from "./types";
import { usePostCardState } from "./state";

export const PostCard: FC<PostCardProps> = ({ account, ...args }) => {
  const { chatHandler } = usePostCardState();
  return (
    <View
      style={{
        shadowOffset: { width: -2, height: 4 },
        shadowColor: "#171717",
        shadowOpacity: 0.05,
        shadowRadius: 6,
      }}
      className="flex flex-col min-h-[100px] bg-white rounded-xl border border-secondary-3"
    >
      <View className="flex flex-row p-4 items-center">
        <View className="flex flex-row flex-1 items-center">
          <View className="mr-2">
            <Image
              className="rounded-full h-[40px] w-[40px]"
              source={
                account.avatar
                  ? account.avatar
                  : require("../../../assets/avatar.png")
              }
            />
          </View>
          <View className="flex flex-col">
            <Text className="font-extrabold">{account.name}</Text>
            <Text className="text-secondary-1 text-[12px]">
              {account.username}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => chatHandler(account)}>
            <Text className="text-primary-1">
              <Feather size={20} name="message-square" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="px-4 mb-4">
        <Text className="font-bold">
          {args.name} - {args.price}
        </Text>
        <Text>{args.description}</Text>
      </View>
      <View className="relative flex flex-1 h-[200px]">
        <Image
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          resizeMode="cover"
          blurRadius={10}
          source={args.image}
        />
        <Image
          style={{
            width: "100%",
            height: "100%",
          }}
          resizeMode="contain"
          source={args.image}
        />
      </View>
      <View className="flex flex-row justify-around p-4">
        <Text className="text-secondary-1">
          <Text>{args.like} </Text>
          <Feather size={16} name="thumbs-up" />
        </Text>
        <Text className="text-secondary-1">
          <Text>{args.comment} </Text>
          <Feather size={16} name="message-circle" />
        </Text>
        <Text className="text-secondary-1">
          <Text>{args.share} </Text>
          <Feather size={16} name="share" />
        </Text>
      </View>
    </View>
  );
};
