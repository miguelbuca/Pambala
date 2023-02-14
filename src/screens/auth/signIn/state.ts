import firebase from "firebase/compat/app";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { Alert } from "react-native";
import { useLoader } from "context/loader";

export const useSignInState = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();
  const recaptchaVerifier = useRef<any>(null);
  const [verificationId, setVerificationId] = useState<any>(null);
  const { setLoader } = useLoader();

  useEffect(() => {
    if (verificationId) {
      navigation.navigate(
        "Otp" as never,
        {
          phoneNumber,
          verificationId,
        } as never
      );
    }
    setLoader?.(false);
  }, [verificationId]);

  const next = () => {
    setLoader?.(true);
    if (phoneNumber) {
      const phoneAuthProvider = new firebase.auth.PhoneAuthProvider();

      phoneAuthProvider
        .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
        .then(setVerificationId);
    } else {
      setLoader?.(false);
      Alert.alert(
        "Número de telefone",
        "Por favor informe o número seu telefone."
      );
    }
  };

  const phoneInputHandler = (displayValue: string, iso2: string) => {
    setPhoneNumber(displayValue);
  };
  return { next, recaptchaVerifier, phoneInputHandler };
};
