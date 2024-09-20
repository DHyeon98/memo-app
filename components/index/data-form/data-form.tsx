import Textarea from '../textarea/textarea';
import SubmitButton from '../../common/button/submit-button/submit-button';
import styled from 'styled-components/native';
import { useState } from 'react';
import { setItem } from '@/apis';
import useSWR from 'swr';
import { useModal } from '@/hook/useModal';
import WarningModal from '@/components/common/modal/warning-modal/warning-modal';

/**
 * 메모를 추가하는 form 컴포넌트 입니다.
 */
export default function DataForm() {
  const { data, mutate } = useSWR('data');
  const [text, setText] = useState('');
  const { isOpen, openModal, closeModal, ModalComponent } = useModal();

  // 메모 추가 함수 입니다.
  // 작성된 텍스트가 없다면 모달이 나옵니다.
  // data가 없을 때는 form에 작성된 텍스트를 추가하고,
  // data가 있다면 data 앞에 작성된 텍스트를 추가합니다.
  const handleSubmit = async () => {
    const newData = {
      id: Date.now().toString(),
      text: text,
    };
    if (!text) return openModal();
    const updatedData = data ? [newData, ...data] : [newData];
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
      <ModalComponent closeModal={closeModal} isOpen={isOpen}>
        <WarningModal>
          <WarningModal.Text>내용을 입력해주세요.</WarningModal.Text>
          <WarningModal.Button buttonColor="#47b976" handleFun={closeModal}>
            확인
          </WarningModal.Button>
        </WarningModal>
      </ModalComponent>
    </FormContainer>
  );
}

const FormContainer = styled.View`
  gap: 10px;
  margin-bottom: 10px;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-family: 'Pretendard';
`;
const ButtonBox = styled.View`
  height: 40px;
`;
