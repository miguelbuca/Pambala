import React, { createContext, useContext, useState } from "react";
import { ActivityIndicator, View, ViewProps, Text } from "react-native";
import { theme } from "../../tailwind.config";

const LoaderContext = createContext<{
  loading: boolean;
  setLoader: (state: boolean, label?: string) => void;
}>({
  loading: false,
  setLoader(state, label) {
    throw new Error("Not implemented!");
  },
});

export const LoaderProvider: React.FC<ViewProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loadingLabel, setLoadingLabel] = useState<string>();

  const setLoader = (state: boolean, label?: string) => {
    setLoading(state);
    setLoadingLabel(label);
  };

  return (
    <LoaderContext.Provider
      value={{
        loading,
        setLoader,
      }}
    >
      {children}
      {loading ? (
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
          className="absolute h-full w-full flex justify-center items-center"
        >
          <ActivityIndicator
            size={"large"}
            color={theme.extend.colors.primary[1]}
          />
          {loadingLabel ? (
            <Text className="text-white mt-4 font-semibold text-[16px]">
              {loadingLabel}
            </Text>
          ) : null}
        </View>
      ) : null}
    </LoaderContext.Provider>
  );
};

export function useLoader() {
  const context = useContext(LoaderContext);

  if (!context) {
    throw new Error("useLoader must be used within an LoaderProvider");
  }

  return context;
}
