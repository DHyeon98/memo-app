import CommonButton from '../../button/common-button';
import { ButtonContainer, Container, ModlaText, WarningImgae } from '../modal-style';

interface DeleteModalType {
  closeModal: () => void;
  handleDelete: () => void;
}

export default function DeleteModal({ closeModal, handleDelete }: DeleteModalType) {
  return (
    <Container>
      <WarningImgae source={require('@/assets/images/warning.png')} />
      <ModlaText>해당 메모가 삭제됩니다.</ModlaText>
      <CommonButton handleFun={handleDelete} backgroundColor="rgb(254 97 97)">
        삭제
      </CommonButton>
    </Container>
  );
}
