import { conversionTime } from "@/utils/conversionTime";
import styled from "styled-components/native";
import RemoveButton from "../../button/card-button/remove-button/remove-button";
import ModifyButton from "../../button/card-button/modify-button/modify-button";
import { useContext, useState } from "react";
import CompletionButton from "../../button/completion-button/completion-button";
import Textarea from "../../textarea/textarea";
import { handleRemoveData } from "@/utils/remove-list";
import { getItem, setItem } from "@/apis";
import { ThemeContext } from "@/contexts/themProvider";
import { darkTheme, lightTheme } from "@/constants/theme";

interface CardItemType {
  text: string;
  date: string;
  index: number;
  updateData: () => void;
}
interface DataType {
  id: string;
  text: string;
}

export default function CardItem({
  text,
  date,
  updateData,
  index,
}: CardItemType) {
  const oddMargin = index % 2 === 0;
  const [modifyState, setModifyState] = useState(false);
  const [modifyText, setModifyText] = useState(text);
  const { theme } = useContext(ThemeContext);
  const themeType = theme === "light" ? lightTheme : darkTheme;

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
    <CardContainer
      theme={themeType}
      style={{
        marginRight: oddMargin ? 10 : 0,
      }}
    >
      <DateText theme={themeType}>{conversionTime(date)}</DateText>
      {modifyState ? (
        <Textarea onChangeText={setModifyText} value={modifyText} />
      ) : (
        <Text theme={themeType}>{text}</Text>
      )}
      <ButtonBox theme={themeType}>
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
`;
const DateText = styled.Text`
  font-family: "Pretendard-Bold";
  margin-bottom: 4px;
  word-break: keep-all;
  width: 100%;
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
