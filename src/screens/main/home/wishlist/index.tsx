import { WishCard } from "components/index";
import React from "react";
import { FlatList, View } from "react-native";
import { useWishListState } from "./state";

export const Wishlist = () => {
  const { wish } = useWishListState();
  return (
    <FlatList
      className="p-4"
      data={wish}
      ItemSeparatorComponent={() => <View className="h-4" />}
      renderItem={({ item, index }) => {
        return <WishCard key={index} {...item} />;
      }}
    />
  );
};
