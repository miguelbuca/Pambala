import { useSecureStore } from "hooks/useSecureStore";

/**
 * This method will ``manager`` the user access
 * @param callback
 * @returns
 */
export function Auth() {
  const { save } = useSecureStore();

  /**
   * This method ``initialize`` a new user ``session``
   * @param phone
   * @param password
   */
  const signIn = (phone: string, password: string) => {};
  /**
   * This method ``delete`` the current ``session``
   */
  const signOut = async () => {};

  /**
   * This method check if ``exists`` some ``session`` in app
   * @returns
   */
  const isLogged = () => {};

  return {
    isLogged,
    signIn,
    signOut,
  };
}
