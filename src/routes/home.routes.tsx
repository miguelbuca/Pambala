import React from "react";
import { Message } from "screens/main";
import { theme } from "../../tailwind.config";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabRoutes } from "./tab.routes";
import { useHelperRoutes } from "context/helperRoutes";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export const HomeRoutes = () => {
  const { colorScheme } = useColorScheme();
  const { old: oldRouteName } = useHelperRoutes();

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        style={colorScheme === "light" ? "dark" : "light"}
      />
      <Stack.Navigator
        screenOptions={{
          //headerShown: false,
          contentStyle: {
            backgroundColor:
              colorScheme === "light"
                ? theme.extend.colors.white
                : theme.extend.colors.primary[2],
          },
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="TabRoutes"
          component={TabRoutes}
        />
        <Stack.Screen
          options={{
            headerTitle: "Mensagens",
            headerBackTitle: oldRouteName,
            headerRight: () => (
              <TouchableOpacity>
                <Feather
                  name="phone"
                  color={theme.extend.colors.primary[1]}
                  size={18}
                />
              </TouchableOpacity>
            ),
          }}
          name="Message"
          component={Message}
        />
      </Stack.Navigator>
    </>
  );
};
