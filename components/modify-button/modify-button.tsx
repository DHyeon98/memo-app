import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "../remove-button/remove-button";

export default function ModifyButton() {
  return (
    <IconButton aria-label="수정하기">
      <FontAwesomeIcon fontSize={14} icon={faPenToSquare} color="#666" />
    </IconButton>
  );
}
