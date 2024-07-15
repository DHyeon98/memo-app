import { darkTheme, lightTheme } from "@/constants/theme";
import { ThemeContext } from "@/contexts/themProvider";
import { useContext } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function Textarea(props: TextInputProps) {
  const { theme } = useContext(ThemeContext);
  return (
    <TextInput
      style={theme === "light" ? styles.light : styles.dark}
      multiline={true}
      defaultValue={props.defaultValue}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  light: {
    width: "100%",
    height: 100,
    borderColor: `#47b976`,
    backgroundColor: `${lightTheme.inputBg}`,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top",
    fontSize: 14,
    fontFamily: "Pretendard",
    color: `${lightTheme.textColor}`,
  },
  dark: {
    width: "100%",
    height: 100,
    borderColor: "#47b976",
    backgroundColor: `${darkTheme.inputBg}`,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top",
    fontSize: 14,
    fontFamily: "Pretendard",
    color: `${darkTheme.textColor}`,
  },
});
