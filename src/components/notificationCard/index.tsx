import { Feather } from "@expo/vector-icons";
import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";
import { useNotificationCardState } from "./state";

export const NotificationCard: FC<{
  data: Notifications;
  onPress?: () => void;
}> = ({ data, onPress }) => {
  const { notificationAttr } = useNotificationCardState(data);
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          shadowOffset: { width: -2, height: 4 },
          shadowColor: "#171717",
          shadowOpacity: 0.05,
          shadowRadius: 6,
        }}
        className="flex flex-row bg-white p-4 rounded-xl"
      >
        <View>
          <View
            style={{
              backgroundColor: notificationAttr.bgColor,
            }}
            className="flex items-center justify-center rounded-full h-[50px] w-[50px]"
          >
            <Text className="text-white">
              <Feather name={notificationAttr.name as any} size={22} />
            </Text>
          </View>
        </View>
        <View className="flex flex-col flex-1 px-2">
          <View>
            <Text className="font-semibold text-[14px]">{data.title}</Text>
          </View>
          <View className="mt-1">
            <Text>{data.content}</Text>
          </View>
        </View>
        <View>
          <Text className="text-secondary-1">
            {data?.date?.substring(0, 5)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
