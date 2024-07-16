import CardButton from "../card-button";
import { Dispatch } from "react";

interface ModifyButtonType {
  setModifyState: Dispatch<React.SetStateAction<boolean>>;
}

export default function ModifyButton({ setModifyState }: ModifyButtonType) {
  const handleModify = async () => {
    setModifyState(true);
  };
  return (
    <CardButton handleFun={handleModify} backgroundColor="rgb(66 66 232)">
      수정
    </CardButton>
  );
}
