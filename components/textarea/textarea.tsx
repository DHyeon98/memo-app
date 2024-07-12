import { TextInputProps } from "react-native";
import styled from "styled-components/native";

export default function Textarea(prop: TextInputProps) {
  return <TextareaInput multiline numberOfLines={4} {...prop} />;
}

const TextareaInput = styled.TextInput`
  width: 100%;
  padding: 5px 0;
  border: 1px solid red;
  background-color: #fff;
  padding: 10px;
`;
