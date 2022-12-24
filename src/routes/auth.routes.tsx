import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import React from "react";
import { Otp, Recover, SignIn, SignUp } from "screens/auth";
import { theme } from "../../tailwind.config";

const Stack = createNativeStackNavigator();

export const AuthRoutes = () => {
  const { colorScheme } = useColorScheme();
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
            title: "Autenticação",
          }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{
            title: "Subscrição",
          }}
          name="Otp"
          component={Otp}
        />
        <Stack.Screen name="Recover" component={Recover} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </>
  );
};
