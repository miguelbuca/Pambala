import {
  createNavigationContainerRef,
  NavigationContainerRefWithCurrent,
  StackActions,
} from "@react-navigation/native";
import React, { createContext, useContext, useMemo, useState } from "react";
import { ViewProps } from "react-native";
import {
  getAuth,
  inMemoryPersistence,
  setPersistence,
  UserInfo,
} from "firebase/auth";
import { useLoader } from "./loader";

const navigationRef = createNavigationContainerRef();

const AuthContext = createContext<{
  user?: UserInfo;
  navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;
}>({ navigationRef });

export const AuthProvider: React.FC<ViewProps> = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState<UserInfo>();
  const { setLoader } = useLoader();
  const [authCheck, setAuthCheck] = useState(false);

  useMemo(() => {
    const account = auth.currentUser;

    if (account) {
      setUser(account);
      setPersistence(auth, inMemoryPersistence);
      if (!account.displayName) {
        navigationRef.dispatch(
          StackActions.replace("Auth", {
            screen: "CompleteProfile",
          })
        );
      } else {
        navigationRef.dispatch(
          StackActions.replace("Main", {
            screen: "Home",
          })
        );
      }
    } else navigationRef.dispatch(StackActions.replace("Auth"));
    setLoader(false);
    setAuthCheck(true);
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
        user,
        navigationRef,
      }}
    >
      {authCheck ? children : null}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
