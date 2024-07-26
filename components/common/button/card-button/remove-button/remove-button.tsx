import CommonButton from '../../common-button';
import { handleRemoveData } from '@/utils/remove-list';

interface RemoveButtonType {
  date: string;
  handleFun: () => void;
}

export default function RemoveButton({ date, handleFun }: RemoveButtonType) {
  const onRemoveData = () => {
    handleRemoveData(date, handleFun);
  };

  return (
    <CommonButton handleFun={onRemoveData} backgroundColor="rgb(254 97 97);">
      삭제
    </CommonButton>
  );
}
