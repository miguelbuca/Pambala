import { Feather } from "@expo/vector-icons";
import { Button } from "components/button";
import { Input } from "components/Input";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useEditProfileState } from "./state";

export const CompleteProfile = () => {
  const {
    phoneNumber,
    user,
    image,
    pickImage,
    setUser,
    completeProfileHandler,
  } = useEditProfileState();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView className="px-4">
        <View className="relative py-12 items-center justify-center">
          <View>
            <Image
              className="h-[120px] w-[120px] border border-secondary-3 rounded-full "
              source={
                user.photoURL
                  ? { uri: user.photoURL }
                  : image
                  ? { uri: image }
                  : require("assets/avatar.png")
              }
              resizeMode="stretch"
            />
            <Pressable
              onPress={pickImage}
              className="absolute bottom-0 right-0 bg-primary-1 border-2 border-white rounded-full p-2.5"
            >
              <Text className="text-white">
                <Feather size={18} name="camera" />
              </Text>
            </Pressable>
          </View>
        </View>
        <View className="mb-[40px]">
          <Input
            icon="edit"
            onChangeText={(e) =>
              setUser({
                ...user,
                displayName: e,
              })
            }
            placeholder="Nome completo"
          />
          <Input
            onChangeText={(e) =>
              setUser({
                ...user,
                email: e,
              })
            }
            icon="mail"
            placeholder="Email"
            keyboardType="email-address"
          />
          <Input
            icon="phone"
            value={phoneNumber as string}
            placeholder="Phone"
            editable={false}
          />
        </View>
      </ScrollView>
      <View className="p-4">
        <Button onPress={completeProfileHandler}>Finalizar</Button>
      </View>
    </KeyboardAvoidingView>
  );
};
