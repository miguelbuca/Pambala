import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider, useAuth } from "context/auth";
import { AuthRoutes } from "./auth.routes";
import { MainRoutes } from "./main.routes";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const { navigationRef } = useAuth();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          //animation: "none",
          headerShown: false,
        }}
        initialRouteName="Main"
      >
        <Stack.Screen name="Auth" component={AuthRoutes} />
        <Stack.Screen name="Main" component={MainRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
