import React, { createContext, useContext, useEffect, useState } from "react";
import { ViewProps } from "react-native";
import { Auth } from "../utils/auth";

const AuthContext = createContext<{
  user?: User;
}>({});

export const AuthProvider: React.FC<ViewProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    id: "1",
    name: "Guivalda",
    username: "@guiv",
  });

  const loadUser = () => {
    (async () => {})();
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
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
