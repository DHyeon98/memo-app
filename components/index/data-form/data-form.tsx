import Textarea from '../textarea/textarea';
import SubmitButton from '../../common/button/submit-button/submit-button';
import styled from 'styled-components/native';
import { Dispatch, useState } from 'react';
import { setItem } from '@/apis';
import useSWR from 'swr';

interface DataItem {
  id: string;
  text: string;
}

export default function DataForm() {
  const { data, mutate } = useSWR('data');
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    const newData: DataItem = {
      id: Date.now().toString(),
      text: text,
    };
    const updatedData = [newData, ...data];
    await setItem('data', JSON.stringify(updatedData));
    setText('');
    mutate();
  };

  return (
    <FormContainer>
      <Textarea type="basic" value={text} onChangeText={setText} />
      <ButtonBox>
        <SubmitButton handleSubmit={handleSubmit}>
          <ButtonText>추가</ButtonText>
        </SubmitButton>
      </ButtonBox>
    </FormContainer>
  );
}

const FormContainer = styled.View`
  gap: 10px;
  margin-bottom: 10px;
`;
const ButtonBox = styled.View`
  height: 40px;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Pretendard';
`;
