import styled from "styled-components/native";

export default function Textarea(prop: any) {
  return <TextareaInput multiline numberOfLines={4} {...prop} />;
}

const TextareaInput = styled.TextInput`
  width: 100%;
  padding: 5px 0;
  border: 1px solid red;
`;
