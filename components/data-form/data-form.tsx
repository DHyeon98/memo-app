import Textarea from "../textarea/textarea";
import SubmitButton from "../submit-button/submit-button";
import styled from "styled-components/native";
import { Dispatch } from "react";

interface FormProps {
  handleSubmit: () => void;
  text: string;
  setText: Dispatch<React.SetStateAction<string>>;
}

export default function DataForm({ handleSubmit, text, setText }: FormProps) {
  return (
    <FormContainer>
      <Textarea value={text} onChangeText={setText} />
      <SubmitButton handleSubmit={handleSubmit}>추가</SubmitButton>
    </FormContainer>
  );
}

const FormContainer = styled.View`
  gap: 10px;
  padding: 0 16px;
`;
