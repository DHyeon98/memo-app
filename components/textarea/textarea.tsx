import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function Textarea(props: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      multiline={true}
      defaultValue={props.defaultValue}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 100,
    borderColor: "#47b976",
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 10,
    textAlignVertical: "top",
    fontSize: 14,
    fontFamily: "Pretendard",
  },
});
