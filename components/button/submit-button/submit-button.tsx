import { PropsWithChildren } from "react";
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
      {children}
    </Button>
  );
}

const Button = styled.Pressable`
  height: 100%;
  width: 100%;
  background-color: #47b976;
  justify-content: center;
  align-items: center;
`;
