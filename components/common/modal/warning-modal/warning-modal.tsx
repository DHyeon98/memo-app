import styled from 'styled-components/native';
import CommonButton from '../../button/common-button';
import { PropsWithChildren } from 'react';

interface ModalButtonType {
  handleFun: () => void;
  buttonColor: string;
}

export default function WarningModal({ children }: PropsWithChildren) {
  return (
    <Container>
      <WarningImgae source={require('@/assets/images/warning.png')} />
      {children}
    </Container>
  );
}

function Text({ children }: PropsWithChildren) {
  return <ModalText>{children}</ModalText>;
}

function Button({ children, handleFun, buttonColor }: PropsWithChildren<ModalButtonType>) {
  return (
    <CommonButton onPress={handleFun} backgroundColor={buttonColor}>
      {children}
    </CommonButton>
  );
}

const Container = styled.View`
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
`;
const ModalText = styled.Text`
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

WarningModal.Text = Text;
WarningModal.Button = Button;
