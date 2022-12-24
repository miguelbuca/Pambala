import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useMessageState } from "./state";
import { Input, MessageBox } from "components/index";

export const Message = () => {
  const { messages } = useMessageState();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
    >
      <View className="flex flex-1 px-4">
        <FlatList
          className="flex-1"
          data={messages}
          renderItem={({ index, item }) => {
            return <MessageBox key={index} {...item} />;
          }}
        />
        <View className="flex items-center justify-center w-full">
          <View className="flex py-4 flex-row items-center justify-center">
            <View className="flex-1">
              <Input placeholder="Escrever mensagem" />
            </View>
            <View className="ml-2">
              <TouchableOpacity>
                <View className="flexl items-center justify-center bg-primary-1 p-2 rounded-full">
                  <Text className="text-white">
                    <Feather size={22} name="mic" />
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
