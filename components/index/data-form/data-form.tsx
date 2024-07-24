import Textarea from '../textarea/textarea';
import SubmitButton from '../../common/button/submit-button/submit-button';
import styled from 'styled-components/native';
import { Dispatch } from 'react';

interface FormProps {
  handleSubmit: () => void;
  text: string;
  setText: Dispatch<React.SetStateAction<string>>;
}

export default function DataForm({ handleSubmit, text, setText }: FormProps) {
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
