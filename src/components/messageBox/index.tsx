import React, { FC } from "react";
import { View, Text } from "react-native";
import { useMessageBoxState } from "./state";

export const MessageBox: FC<Message> = ({ senderId }) => {
  const { user } = useMessageBoxState();

  return (
    <View
      className={`flex pt-4 flex-row ${
        user?.id !== senderId ? "justify-start" : "justify-end"
      }`}
    >
      <Text>
        <View
          className={`p-4 ${
            user?.id !== senderId
              ? "bg-secondary-3 rounded-[20px] rounded-tl-[6px]"
              : "bg-primary-1  rounded-[20px] rounded-br-[6px]"
          }`}
        >
          <Text className={`${user?.id === senderId && "text-white"}`}>
            MyComponent
          </Text>
        </View>
      </Text>
    </View>
  );
};
