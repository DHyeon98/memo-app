import { conversionTime } from "@/utils/conversionTime";
import styled from "styled-components/native";
import RemoveButton from "../utils-button/remove-button/remove-button";
import ModifyButton from "../utils-button/modify-button/modify-button";
import { useContext, useState } from "react";
import CompletionButton from "../completion-button/completion-button";
import Textarea from "../textarea/textarea";
import { handleRemoveData } from "@/utils/remove-list";
import { getItem, setItem } from "@/apis";
import { ThemeContext } from "@/contexts/themProvider";
import { darkTheme, lightTheme } from "@/constants/theme";

interface CardType {
  text: string;
  date: string;
  updateData: () => void;
}
interface DataType {
  id: string;
  text: string;
}

export default function Card({ text, date, updateData }: CardType) {
  const [modifyState, setModifyState] = useState(false);
  const [modifyText, setModifyText] = useState(text);
  const { theme } = useContext(ThemeContext);

  const hanldeModifyCompletion = async () => {
    const storedData = await getItem("data");
    if (storedData) {
      const parseData = JSON.parse(storedData);
      const newData: DataType = {
        id: Date.now().toString(),
        text: modifyText,
      };
      const updatedData = [newData, ...parseData];
      await setItem("data", JSON.stringify(updatedData));
      setModifyText("");
      handleRemoveData(date, updateData);
      setModifyState(false);
    }
  };
  return (
    <CardContainer theme={theme === "light" ? lightTheme : darkTheme}>
      <DateText theme={theme === "light" ? lightTheme : darkTheme}>
        {conversionTime(date)}
      </DateText>
      {modifyState ? (
        <Textarea onChangeText={setModifyText} value={modifyText} />
      ) : (
        <Text theme={theme === "light" ? lightTheme : darkTheme}>{text}</Text>
      )}
      <ButtonBox theme={theme === "light" ? lightTheme : darkTheme}>
        {modifyState ? (
          <CompletionButton handleCompletion={hanldeModifyCompletion} />
        ) : (
          <>
            <RemoveButton date={date} updateData={updateData} />
            <ModifyButton setModifyState={setModifyState} />
          </>
        )}
      </ButtonBox>
    </CardContainer>
  );
}

const CardContainer = styled.View`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.cardBg};
  margin-top: 10px;
`;
const DateText = styled.Text`
  font-family: "Pretendard-Bold";
  margin-bottom: 4px;
  color: ${({ theme }) => theme.textColor};
`;
const Text = styled.Text`
  color: ${({ theme }) => theme.textColor};
  line-height: 20px;
  font-family: "Pretendard";
`;
const ButtonBox = styled.View`
  flex-direction: row;
  gap: 4px;
  margin-top: 10px;
  padding-top: 10px;
  border-top-color: ${({ theme }) => theme.borderColor};
  border-top-width: 1px;
`;
