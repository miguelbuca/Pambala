import {
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { browserSessionPersistence, setPersistence } from "firebase/auth";
import firebase from "firebase/compat/app";
import { useState } from "react";
import { Alert } from "react-native";

export const useOtpState = () => {
  const [otp, setOtp] = useState<string>();
  const { params } = useRoute<any>();
  const navigation = useNavigation();

  const otpHandler = (value: string) => setOtp(value);

  const sendOTP = () => {
    if (otp) {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        params.verificationId,
        otp
      );

      firebase
        .auth()
        .signInWithCredential(credential)
        .then((session) => {
          const additionalUserInfo = session.additionalUserInfo;

          if (additionalUserInfo?.isNewUser) {
            navigation.dispatch(
              StackActions.replace("Auth", {
                screen: "CompleteProfile",
              })
            );
          } else {
            navigation.dispatch(StackActions.replace("Main"));
          }
        })
        .catch((error) => Alert.alert(error.message));
    } else
      Alert.alert(
        "código de segurança",
        "Por favor informe o código de segurança."
      );
  };

  return { params, otpHandler, sendOTP };
};
