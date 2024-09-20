import { Modal } from 'react-native';
import styled from 'styled-components/native';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

/**
 * 모달 컴포넌트 입니다.
 * 모달이 열리고 닫힐 조건물을 인자로 받아옵니다.
 */
export default function ModalComponent({ children, isOpen, closeModal }: ModalProps) {
  return (
    <Modal transparent visible={isOpen}>
      <ModalView>
        <ModalBackboard onPress={closeModal}></ModalBackboard>
        {children}
      </ModalView>
    </Modal>
  );
}

const ModalBackboard = styled.Pressable`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;
const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
