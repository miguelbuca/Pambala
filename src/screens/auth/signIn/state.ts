import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert } from "react-native";

export const useSignInState = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();
  const next = () => {
    if (phoneNumber)
      navigation.navigate(
        "Otp" as never,
        {
          phoneNumber,
        } as never
      );
    else
      Alert.alert(
        "Número de telefone",
        "Por favor informe o número seu telefone."
      );
  };

  const phoneInputHandler = (displayValue: string, iso2: string) => {
    setPhoneNumber(displayValue);
  };
  return { next, phoneInputHandler };
};
