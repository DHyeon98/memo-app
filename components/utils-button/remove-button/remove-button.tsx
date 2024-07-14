import { getItem, setItem } from "@/apis";
import { UtilButtonType } from "../types";
import UtilsButton from "../utils-button";
import { handleRemoveData } from "@/utils/remove-list";

export default function RemoveButton({ date, updateData }: UtilButtonType) {
  const onRemoveData = () => {
    handleRemoveData(date, updateData);
  };

  return (
    <UtilsButton handleFun={onRemoveData} backgroundColor="rgb(254 97 97);">
      삭제
    </UtilsButton>
  );
}
