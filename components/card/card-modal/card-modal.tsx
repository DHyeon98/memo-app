import { getItem, setItem } from '@/apis';
import ModifyButton from '@/components/button/card-button/modify-button/modify-button';
import RemoveButton from '@/components/button/card-button/remove-button/remove-button';
import CompletionButton from '@/components/button/completion-button/completion-button';
import Textarea from '@/components/textarea/textarea';
import { darkTheme, lightTheme, themeType } from '@/constants/theme';
import { conversionTime } from '@/utils/conversionTime';
import { handleRemoveData } from '@/utils/remove-list';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

interface DataType {
  id: string;
  text: string;
}

interface CardModalType {
  text: string;
  date: string;
  updateData: () => void;
  theme: string;
}

export default function CardModal({ text, date, updateData, theme }: CardModalType) {
  const [modifyState, setModifyState] = useState(false);
  const [modifyText, setModifyText] = useState(text);

  const hanldeModifyCompletion = async () => {
    const storedData = await getItem('data');
    if (storedData) {
      const parseData = JSON.parse(storedData);
      const newData: DataType = {
        id: Date.now().toString(),
        text: modifyText,
      };
      const updatedData = [newData, ...parseData];
      await setItem('data', JSON.stringify(updatedData));
      setModifyText('');
      handleRemoveData(date, updateData);
      setModifyState(false);
    }
  };

  return (
    <CardModalContainer theme={themeType(theme)}>
      <View>
        <DateText theme={themeType(theme)}>{conversionTime(date)}</DateText>
        {modifyState ? (
          <Textarea onChangeText={setModifyText} value={modifyText} />
        ) : (
          <Text theme={themeType(theme)}>{text}</Text>
        )}
      </View>
      <ButtonBox theme={themeType(theme)}>
        {modifyState ? (
          <CompletionButton handleCompletion={hanldeModifyCompletion} />
        ) : (
          <>
            <RemoveButton date={date} updateData={updateData} />
            <ModifyButton setModifyState={setModifyState} />
          </>
        )}
      </ButtonBox>
    </CardModalContainer>
  );
}

const CardModalContainer = styled.View`
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.cardBg};
  width: 300px;
  border-radius: 8px;
`;

const ButtonBox = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 10px;
  padding-top: 10px;
  border-top-color: ${({ theme }) => theme.borderColor};
  border-top-width: 1px;
`;

const DateText = styled.Text`
  font-family: 'Pretendard-Bold';
  margin-bottom: 5px;
  word-break: keep-all;
  width: 100%;
  color: ${({ theme }) => theme.textColor};
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.textColor};
  line-height: 20px;
  font-family: 'Pretendard';
`;
