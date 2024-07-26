import styled from 'styled-components/native';
import CommonButton from '../../button/common-button';
import { Image } from 'react-native';

interface WarningModalType {
  closeModal: () => void;
  multiple: boolean;
}

export default function WarningModal({ closeModal, multiple }: WarningModalType) {
  return (
    <Container>
      <WarningImgae source={require('@/assets/images/warning.png')} />
      <ModlaText>내용을 입력해주세요.</ModlaText>
      <CommonButton handleFun={closeModal} backgroundColor="#47b976">
        확인
      </CommonButton>
    </Container>
  );
}

function ModalButton({ multiple, closeModal }: WarningModalType) {
  return multiple ? (
    <ButtonContainer>
      <CommonButton handleFun={closeModal} backgroundColor="rgb(254 97 97)">
        삭제
      </CommonButton>
      <CommonButton handleFun={closeModal} backgroundColor="#47b976">
        확인
      </CommonButton>
    </ButtonContainer>
  ) : (
    <CommonButton handleFun={closeModal} backgroundColor="#47b976">
      확인
    </CommonButton>
  );
}
const Container = styled.View`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
`;
const ModlaText = styled.Text`
  font-size: 16px;
  font-family: 'Pretendard-Bold';
  text-align: center;
  margin: 20px 0 30px;
`;
const WarningImgae = styled.Image`
  width: 30px;
  height: 30px;
  margin: 0 auto;
`;
const ButtonContainer = styled.View`
  flex-direction: row;
`;
