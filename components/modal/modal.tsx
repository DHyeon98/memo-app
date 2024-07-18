import { Modal } from "react-native";
import styled from "styled-components/native";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

export default function ModalComponent({
  children,
  isOpen,
  closeModal,
}: ModalProps) {
  return (
    <Modal transparent visible={isOpen}>
      <ModalBackboard onPress={closeModal}></ModalBackboard>
      {children}
    </Modal>
  );
}

const ModalBackboard = styled.TouchableOpacity`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;
