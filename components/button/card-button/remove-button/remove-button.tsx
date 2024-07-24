import { CardButtonType } from '../types';
import CardButton from '../card-button';
import { handleRemoveData } from '@/utils/remove-list';

export default function RemoveButton({ date, updateData }: CardButtonType) {
  const onRemoveData = () => {
    handleRemoveData(date, updateData);
  };

  return (
    <CardButton handleFun={onRemoveData} backgroundColor="rgb(254 97 97);">
      삭제
    </CardButton>
  );
}
