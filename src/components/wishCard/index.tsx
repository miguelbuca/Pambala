import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useWisshCardState } from "./state";

export const WishCard: FC<Wish> = ({ name, maxPrice, minPrice, status }) => {
  const { isOpen, convert, isOpenHandler } = useWisshCardState();
  return (
    <TouchableOpacity onPress={isOpenHandler}>
      <View
        className={`flex flex-col p-4 bg-white rounded-xl border border-secondary-3 ${
          status === "active" && "border-primary-1"
        }`}
      >
        <View>
          <Text>{name}</Text>
        </View>
        {isOpen && (
          <View className="flex flex-col mt-4 border-t border-t-secondary-3">
            <View className="mt-4 flex flex-row">
              <Text className="uppercase text-secondary-1">Preço mínimo </Text>
              <Text>{convert(minPrice)}</Text>
            </View>
            <View className="mt-4 flex flex-row">
              <Text className="uppercase text-secondary-1">Preço máximo </Text>
              <Text>{convert(maxPrice)}</Text>
            </View>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
