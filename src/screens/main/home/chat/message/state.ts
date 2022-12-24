import { useNavigation } from "@react-navigation/native";
import { useEffect, useMemo } from "react";

export const useMessageState = () => {
  const navigation = useNavigation();

  const messages = useMemo(() => {
    const sms: Message[] = [
      {
        senderId: "1",
        content: "eu enviando",
        status: "active",
        from: {
          id: "1",
          name: "Guivalda",
        },
        to: {
          id: "2",
          name: "Miguel Buca",
        },
      },
      {
        senderId: "2",
        content: "eu recebendo",
        status: "active",
        to: {
          id: "1",
          name: "Guivalda",
        },
        from: {
          id: "2",
          name: "Miguel Buca",
        },
      },
    ];
    return sms;
  }, []);

  return { messages };
};
