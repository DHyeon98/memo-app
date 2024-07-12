import { PropsWithChildren } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

interface SubmitButtonType {
  handleSubmit: () => void;
}

export default function SubmitButton({
  children,
  handleSubmit,
}: PropsWithChildren<SubmitButtonType>) {
  return (
    <Button onPress={handleSubmit}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
}

const Button = styled.Pressable`
  height: 40px;
  width: 100%;
  background-color: red;
  justify-content: center;
  align-items: center;
`;
const ButtonText = styled.Text`
  color: #fff;
`;
