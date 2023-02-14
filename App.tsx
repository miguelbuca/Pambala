import "react-native-get-random-values";
import { useCallback, useEffect } from "react";
import Routes from "routes/index.routes";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { View } from "react-native";
import * as Constants from "expo-constants";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import { LoaderProvider } from "context/loader";
import { AuthProvider } from "context/auth";

export default function App() {
  const [fontsLoaded] = useFonts({
    GreatVibesRegular: require("assets/fonts/GreatVibes-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    firebase.initializeApp(Constants.default.expoConfig?.extra?.firebaseConfig);
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <LoaderProvider>
        <Routes />
      </LoaderProvider>
    </View>
  );
}
