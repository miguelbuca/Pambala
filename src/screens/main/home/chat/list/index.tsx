import { UserChartCard, QuickMessageCard } from "components/index";
import React from "react";
import { FlatList, View, Text } from "react-native";
import { useListState } from "./state";

export const List = () => {
  const { params } = useListState();
  return (
    <FlatList
      className="flex-1"
      data={["1", "2", "3"]}
      ItemSeparatorComponent={() => (
        <View className="border-b border-b-secondary-3" />
      )}
      renderItem={({ item, index }) => {
        return (
          <View key={index}>
            {index === 0 && <QuickMessageCard display={!!params} />}
            <UserChartCard />
          </View>
        );
      }}
    />
  );
};
