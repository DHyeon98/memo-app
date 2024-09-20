import { setItem } from '@/apis';
import { useRouter } from 'expo-router';
import useSWR from 'swr';
import { useModal } from '@/hook/useModal';
import { DataType } from '@/types/data';
import CommonButton from '@/components/common/button/common-button';
import WarningModal from '@/components/common/modal/warning-modal/warning-modal';
import styled from 'styled-components/native';
import { useBgColor } from '@/hook/useBgColor';

interface DetailsButtonType {
  detailsId: string;
}

/**
 * 상세 페이지의 삭제 버튼 컴포넌트 입니다.
 */
export default function DetailsButton({ detailsId }: DetailsButtonType) {
  const { mutate, data } = useSWR('data');
  const router = useRouter();
  const { isOpen, closeModal, ModalComponent, openModal } = useModal();
  const { handlePressIn, handlePressOut, bgColor } = useBgColor('#fe6161', '#aa4141');

  // 삭제 버튼을 눌렀을 때 해당 data의 id를 찾아서 삭제하는 함수입니다.
  // 삭제 후 mutation하고 메인 페이지 또는 검색 페이지로 이동합니다.
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
        <CommonButton
          onPress={openModal}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          backgroundColor={bgColor}
        >
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
