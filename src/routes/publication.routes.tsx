import React from "react";
import { Message } from "screens/main";
import { theme } from "../../tailwind.config";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Create, Show } from "screens/main/publish";
import { useHelperRoutes } from "context/helperRoutes";

const Stack = createNativeStackNavigator();

export const PublicationRoutes = () => {
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
          //animation: "none",
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
          name="Create"
          component={Create}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Show"
          component={Show}
        />
      </Stack.Navigator>
    </>
  );
};
