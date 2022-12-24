import React, { useEffect, useRef, useState } from "react";
import { View, TextInput, TextInputProps } from "react-native";

export type SingleInputType<TextInputProps> = {
  type: "only-one" | "multiple";
  size?: number;
  separatorValue?: number;
  onChange?: (value: string) => void;
  clear?: boolean;
  currentFocus?: number;
  inputProps?: TextInputProps;
};

export const OtpInput: React.FC<SingleInputType<TextInputProps>> = ({
  type,
  separatorValue,
  size,
  clear,
  onChange,
  currentFocus,
  inputProps,
}) => {
  const _inputsList: any[] = [];
  const [value, setValue] = useState<string>("");
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    _inputsList.map((item: any, index: number) => {
      //index === 0 && _inputsList[index].current.focus();
      item.current.clear();
    });
  }, [clear]);

  useEffect(() => {
    onChange && onChange(value);
  }, [value]);

  useEffect(() => {
    currentFocus !== undefined &&
      currentFocus >= 0 &&
      _inputsList[currentFocus].current.focus();
  }, [currentFocus]);

  const _input = (key: number = 0) => {
    const ref = useRef<any>(key);

    _inputsList.push(ref);

    return (
      <TextInput
        key={key}
        ref={ref}
        maxLength={1}
        className={`rounded-[12px] border-2 text-center ${
          focus ? "border-primary-1" : "border-secondary-1"
        } w-12 h-12 mr-1.5 font-semibold text-[16px]`}
        keyboardType={"numeric"}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChangeText={(text: string) => {
          if (text == "" || text == undefined) return;

          setValue((prev) => prev + text);

          key + 1 < _inputsList.length && _inputsList[key + 1].current.focus();
        }}
        onKeyPress={(e: any) => {
          if (e.nativeEvent.key === "Backspace") {
            setValue((prev) => {
              const refresh = [...prev]
                .filter((_, index) => index != key)
                .join("");
              return refresh;
            });

            key - 1 > -1 && _inputsList[key - 1].current.focus();
          }
        }}
        {...inputProps}
      />
    );
  };

  const _buildMultiple = () => {
    const childList: JSX.Element[] = [];
    let _key = 0;
    while (size != _key) {
      if (separatorValue && _key % separatorValue === 0 && _key !== 0) {
        childList.push(
          <View
            key={`-${_key}`}
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 22,
            }}
          ></View>
        );
      }
      childList.push(_input(_key));
      _key++;
    }
    return childList;
  };

  return (
    <View className="flex flex-row justify-center">
      {type === "only-one" ? _input() : _buildMultiple()}
    </View>
  );
};
