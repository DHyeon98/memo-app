import CommonButton from '../../common-button';
import { Dispatch } from 'react';

interface ModifyButtonType {
  setModifyState: Dispatch<React.SetStateAction<boolean>>;
}

export default function ModifyButton({ setModifyState }: ModifyButtonType) {
  const handleModify = () => {
    setModifyState(true);
  };
  return (
    <CommonButton handleFun={handleModify} backgroundColor="rgb(66 66 232)">
      수정
    </CommonButton>
  );
}
