import { conversionTime } from "@/utils/conversionTime";
import styled from "styled-components/native";
import RemoveButton from "../remove-button/remove-button";
import ModifyButton from "../modify-button/modify-button";

interface CardType {
  text: string;
  date: string;
}

export default function Card({ text, date }: CardType) {
  return (
    <CardContainer>
      <DateText>{conversionTime(date)}</DateText>
      <Text>{text}</Text>
      <ButtonBox>
        <RemoveButton />
        <ModifyButton />
      </ButtonBox>
    </CardContainer>
  );
}

const CardContainer = styled.View`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  margin-top: 10px;
`;
const DateText = styled.Text`
  color: #1c1c1c;
`;
const Text = styled.Text`
  color: #1c1c1c;
  margin-top: 4px;
`;
const ButtonBox = styled.View`
  flex-direction: row;
  gap: 4px;
  margin-top: 10px;
  padding-top: 10px;
  border-top-color: #ddd;
  border-top-width: 1px;
`;
