import { Dispatch } from "react";
import UtilsButton from "../utils-button/utils-button";

interface CompletionButtonType {
  handleCompletion: () => Promise<void>;
}

export default function CompletionButton({
  handleCompletion,
}: CompletionButtonType) {
  return (
    <UtilsButton
      handleFun={handleCompletion}
      backgroundColor="rgb(71, 185, 118)"
    >
      수정완료
    </UtilsButton>
  );
}
