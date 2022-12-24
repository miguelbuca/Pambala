import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { List, Notifications, Posts, Wishlist } from "screens/main";
import Feather from "@expo/vector-icons/Feather";
import { Pressable, Text } from "react-native";
import { theme } from "../../tailwind.config";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  const { colorScheme } = useColorScheme();
  const { toggleDrawer } = useNavigation<any>();

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        style={colorScheme === "light" ? "dark" : "light"}
      />
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor:
            colorScheme === "light"
              ? theme.extend.colors.white
              : theme.extend.colors.primary[2],
        }}
        screenOptions={{
          tabBarActiveTintColor: theme.extend.colors.primary[1],
          tabBarInactiveTintColor: theme.extend.colors.secondary[1],
          tabBarLabelStyle: {
            display: "none",
          },
        }}
      >
        <Tab.Screen
          options={{
            title: "Pambala",
            headerTitleStyle: {
              fontFamily: "GreatVibesRegular",
              fontSize: 23,
            },
            //headerShown: false,
            //headerTransparent: true,
            headerTitleAlign: "center",
            //headerShadowVisible: false,
            headerLeft: () => {
              return (
                <Pressable onPress={toggleDrawer} className="ml-4">
                  <Feather size={23} name="menu" />
                </Pressable>
              );
            },
            headerRight: () => {
              return (
                <View className="mr-4">
                  <View className="flex flex-row relative">
                    <View className="mr-2">
                      <TouchableOpacity>
                        <Text className="flex items-center justify-center font-bold text-[13px]">
                          <Feather size={18} name="shopping-bag" />
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <Text className="flex items-center justify-center font-bold text-[13px]">
                          <Feather size={18} name="search" />
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );
            },
            tabBarIcon: ({ color }) => {
              return <Feather color={color} name="home" size={20} />;
            },
          }}
          name="Posts"
          component={Posts}
        />
        <Tab.Screen
          options={{
            title: "Lista de desejos",
            headerRight: () => {
              return (
                <TouchableOpacity>
                  <View className="flex items-center justify-center mr-4 h-[25px] w-[25px] bg-primary-1 rounded-full">
                    <Feather
                      color={theme.extend.colors.white}
                      name="plus"
                      size={20}
                    />
                  </View>
                </TouchableOpacity>
              );
            },
            tabBarIcon: ({ color }) => {
              return <Feather color={color} name="gift" size={20} />;
            },
          }}
          name="Wishlist"
          component={Wishlist}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => {
              return <Feather color={color} name="bell" size={20} />;
            },
          }}
          name="Notifications"
          component={Notifications}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => {
              return <Feather color={color} name="message-square" size={20} />;
            },
          }}
          name="Chat"
          component={List}
        />
      </Tab.Navigator>
    </>
  );
};
