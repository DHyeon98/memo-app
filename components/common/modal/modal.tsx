import { Modal, View } from 'react-native';
import styled from 'styled-components/native';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

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
