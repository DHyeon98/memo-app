import { setItem } from '@/apis';
import { useRouter } from 'expo-router';
import useSWR from 'swr';
import { useModal } from '@/hook/useModal';
import { DataType } from '@/types/data';
import CommonButton from '@/components/common/button/common-button';
import WarningModal from '@/components/common/modal/warning-modal/warning-modal';
import styled from 'styled-components/native';

interface DetailsButtonType {
  detailsId: string;
}

export default function DetailsButton({ detailsId }: DetailsButtonType) {
  const { mutate, data } = useSWR('data');
  const router = useRouter();
  const { isOpen, closeModal, ModalComponent, openModal } = useModal();

  const handleDelete = async () => {
    const filterData = data.filter((data: DataType) => data.id !== detailsId);
    await setItem('data', JSON.stringify(filterData)).then(() => {
      mutate();
      router.back();
    });
  };
  return (
    <>
      <ButtonContainer>
        <CommonButton handleFun={openModal} backgroundColor="rgb(254 97 97);">
          삭제
        </CommonButton>
      </ButtonContainer>
      <ModalComponent isOpen={isOpen} closeModal={closeModal}>
        <WarningModal>
          <WarningModal.Text>해당 메모가 삭제됩니다.</WarningModal.Text>
          <WarningModal.Button buttonColor="rgb(254 97 97)" handleFun={handleDelete}>
            삭제
          </WarningModal.Button>
        </WarningModal>
      </ModalComponent>
    </>
  );
}
const ButtonContainer = styled.View`
  margin-top: 10px;
`;
