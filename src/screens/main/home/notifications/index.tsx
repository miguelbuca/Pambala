import { NotificationCard } from "components/notificationCard";
import React from "react";
import { View, Text, FlatList } from "react-native";
import { useNotificationsState } from "./state";

export const Notifications = () => {
  const { notifications } = useNotificationsState();
  return (
    <FlatList
      data={notifications}
      ItemSeparatorComponent={() => (
        <View className="h-4 mb-4 border-b border-b-secondary-3" />
      )}
      renderItem={({ index, item }) => {
        return <NotificationCard data={item} key={index} />;
      }}
      className="flex-1 p-4"
    />
  );
};
