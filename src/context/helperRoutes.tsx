import React, { createContext, useContext, useEffect, useState } from "react";
import { ViewProps } from "react-native";
const HelperRoutesContext = createContext<{
  old?: string;
  setOld?: any;
}>({});

export const HelperRoutesProvider: React.FC<ViewProps> = ({ children }) => {
  const [old, setOld] = useState<string>();

  return (
    <HelperRoutesContext.Provider
      value={{
        old,
        setOld,
      }}
    >
      {children}
    </HelperRoutesContext.Provider>
  );
};

export function useHelperRoutes() {
  const context = useContext(HelperRoutesContext);

  if (!context) {
    throw new Error(
      "useHelperRoutes must be used within an HelperRoutesProvider"
    );
  }

  return context;
}
