import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Button, Input } from "components/index";
import { usePublishCreateState } from "./state";
import MasonryList from "react-native-masonry-list";

export const Create = () => {
  const { publication, images, pickImage, setPublication, createHandler } =
    usePublishCreateState();
  return (
    <>
      <ScrollView>
        <View className="pt-4 px-4">
          <Input
            placeholder="Nome"
            icon="edit-2"
            onChangeText={(value) =>
              setPublication({
                ...publication,
                name: value,
              })
            }
          />
          <Input
            placeholder="Preço"
            icon="credit-card"
            currency={{
              value: publication?.amount as number,
              onChangeValue: (value) =>
                setPublication({
                  ...publication,
                  amount: value,
                }),
              prefix: "Kz",
            }}
          />
          <Input
            multiline
            className="text-start h-[150px]"
            placeholder="Descrição"
            icon="edit"
            onChangeText={(value) =>
              setPublication({
                ...publication,
                description: value,
              })
            }
          />
        </View>
        <View className="flex flex-row p-4 items-center">
          <View className="flex-1">
            <Text className="font-semibold text-[16px]">
              Fotos({images?.length})
            </Text>
          </View>
          <Button
            onPress={pickImage}
            style={{
              backgroundColor: "transparent",
            }}
          >
            <Text className="text-primary-1 text-[16px]">Adicionar</Text>
          </Button>
        </View>
        <View className="p-4">
          <MasonryList images={images} />
        </View>
        {images?.length ? (
          <View className="p-4">
            <Button onPress={createHandler}>
              <Text className="font-semibold text-[18px]">Finalizar</Text>
            </Button>
          </View>
        ) : null}
      </ScrollView>
    </>
  );
};
