import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { AuthProvider, useAuth } from "context/auth";
import { HomeRoutes } from "./home.routes";
import { Account, CompleteProfile, History, Sells } from "screens/main";
import { View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HelperRoutesProvider } from "context/helperRoutes";

const Drawer = createDrawerNavigator();

export const MainRoutes = () => {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <HelperRoutesProvider>
        <Drawer.Navigator
          drawerContent={(props) => (
            <View className="flex-1">
              <View className=" bg-primary-1">
                <SafeAreaView className="p-4 h-[200px] flex flex-col">
                  <View className="flex-1 justify-center items-center">
                    <View className="border-2 border-white rounded-full">
                      <Image
                        className="rounded-full h-[60px] w-[60px]"
                        source={
                          user
                            ? { uri: user.photoURL }
                            : require("assets/avatar.png")
                        }
                        resizeMode="stretch"
                      />
                    </View>

                    <View className="mt-1">
                      <Text className="font-bold text-white text-[16px]">
                        {user?.displayName}
                      </Text>
                      <Text className="text-[#ccc] text-center text-[13px]">
                        {user?.email}
                      </Text>
                    </View>
                  </View>
                  <View className="flex flex-row justify-between items-center mt-7">
                    <View className="px-3 py-1.5 bg-white rounded-full">
                      <Text className="font-semibold text-primary-1">
                        1.3K Seguidores
                      </Text>
                    </View>
                    <View>
                      <Text className="font-semibold text-white">15 Items</Text>
                    </View>
                  </View>
                </SafeAreaView>
              </View>
              <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
              </DrawerContentScrollView>
            </View>
          )}
        >
          <Drawer.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={HomeRoutes}
          />
          <Drawer.Screen name="Account" component={Account} />
          <Drawer.Screen name="History" component={History} />
          <Drawer.Screen name="Sells" component={Sells} />
          <Drawer.Screen
            options={{
              title: "Subscrição",
              headerShown: false,
            }}
            name="CompleteProfile"
            component={CompleteProfile}
          />
        </Drawer.Navigator>
      </HelperRoutesProvider>
    </AuthProvider>
  );
};
