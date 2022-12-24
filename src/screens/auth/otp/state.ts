import {
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export const useOtpState = () => {
  const [otp, setOtp] = useState<string>();
  const { params } = useRoute<any>();
  const navigation = useNavigation();

  const otpHandler = (value: string) => setOtp(value);

  const sendOTP = () => {
    if (otp) {
      navigation.dispatch(StackActions.replace("Main"));
    } else
      Alert.alert(
        "código de segurança",
        "Por favor informe o código de segurança."
      );
  };

  return { params, otpHandler, sendOTP };
};
