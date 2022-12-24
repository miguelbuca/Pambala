import React from "react";
import { ScrollView, Text, View, Image, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Button, SearchInput, PostCard } from "components/index";
import { usePostsState } from "./state";
import { Modalize } from "react-native-modalize";
import InstaStory from "react-native-insta-story";
import { theme } from "../../../../../tailwind.config";

export const Posts = () => {
  const { modalizeRef, onOpen } = usePostsState();
  const data = [
    {
      user_id: 1,
      user_image:
        "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
      user_name: "Ahmet Çağlar Durmuş",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
        },
      ],
    },
    {
      user_id: 2,
      user_image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      user_name: "Test User",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 2 swiped"),
        },
      ],
    },
  ];

  return (
    <>
      <ScrollView className="py-4" showsVerticalScrollIndicator={false}>
        <Text className="px-4 text-[16px] font-semibold">Estado</Text>
        <View>
          <InstaStory
            data={data}
            duration={5}
            unPressedBorderColor={theme.extend.colors.primary[1]}
            avatarSize={50}
            //onStart={(item) => console.log(item)}
            //onClose={(item) => console.log("close: ", item)}
            style={{ marginVertical: 10 }}
          />
        </View>
        <View className="flex flex-row justify-between px-4 items-center">
          <View>
            <Text className="text-[16px] font-semibold">Publicações</Text>
          </View>
          <View>
            <Button>
              <Text className="flex items-center justify-center font-bold">
                Publicar <Feather size={18} name="edit" />
              </Text>
            </Button>
          </View>
        </View>
        <View className="p-4 mb-4">
          <Pressable onPress={onOpen}>
            <PostCard
              account={{
                id: "1",
                name: "Guivalda",
                username: "@guiv",
              }}
              price={180000}
              name={"IPHONE X"}
              description={"Memoria 64GB, versao 16"}
              like={10}
              image={require("assets/temp/iphone-2.jpg")}
              share={1}
            />
          </Pressable>
        </View>
        <Modalize ref={modalizeRef} snapPoint={40}>
          <Text>...your content</Text>
        </Modalize>
      </ScrollView>
    </>
  );
};
