import CardButton from "../card-button/card-button";

interface CompletionButtonType {
  handleCompletion: () => Promise<void>;
}

export default function CompletionButton({
  handleCompletion,
}: CompletionButtonType) {
  return (
    <CardButton
      handleFun={handleCompletion}
      backgroundColor="rgb(71, 185, 118)"
    >
      수정완료
    </CardButton>
  );
}
