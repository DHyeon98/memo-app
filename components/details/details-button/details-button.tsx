import RemoveButton from '@/components/common/button/card-button/remove-button/remove-button';
import WarningModal from '@/components/common/modal/warning-modal/warning-modal';
import { useModal } from '@/hook/useModal';
import { useRouter } from 'expo-router';
import styled from 'styled-components/native';
import useSWR from 'swr';

interface DetailsButtonType {
  detailsId: string;
}

export default function DetailsButton({ detailsId }: DetailsButtonType) {
  const { mutate } = useSWR('data');
  const router = useRouter();
  const { isOpen, closeModal, ModalComponent } = useModal();

  const handleGoIndex = () => {
    mutate();
    router.back();
  };
  return (
    <>
      <ButtonContainer>
        <RemoveButton date={detailsId} handleFun={handleGoIndex} />
      </ButtonContainer>
      <ModalComponent isOpen={isOpen} closeModal={closeModal}>
        <WarningModal multiple closeModal={closeModal} />
      </ModalComponent>
    </>
  );
}
const ButtonContainer = styled.View`
  margin-top: 10px;
`;
