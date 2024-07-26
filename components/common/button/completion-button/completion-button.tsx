import CommonButton from '../common-button';

interface CompletionButtonType {
  handleCompletion: () => Promise<void>;
}

export default function CompletionButton({ handleCompletion }: CompletionButtonType) {
  return (
    <CommonButton handleFun={handleCompletion} backgroundColor="rgb(71, 185, 118)">
      수정완료
    </CommonButton>
  );
}
