import { useAuth } from "context/auth";

export const useMessageBoxState = () => {
  const { user } = useAuth();

  return { user };
};
