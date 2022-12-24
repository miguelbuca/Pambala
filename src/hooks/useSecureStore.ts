import * as SecureStore from "expo-secure-store";

type SecureStoreType =
  | "ACCESS_TOKEN"
  | "TOKEN"
  | "USER"
  | "REFRESH_TOKEN"
  | "REFRESH_EXPIRES_IN"
  | "CURRENT_USER";

/**
 * Provides a way to ``encrypt`` and securely store key–value pairs locally on the device.
 * @returns
 */
export const useSecureStore = () => {
  async function save(key: SecureStoreType, value: string) {
    await SecureStore.setItemAsync(key, value);
  }

  async function getValueFor(key: SecureStoreType) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return result;
    }
  }

  return {
    save,
    getValueFor,
  };
};
