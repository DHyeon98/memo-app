import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components/native";

export default function RemoveButton() {
  return (
    <IconButton aria-label="삭제하기">
      <FontAwesomeIcon fontSize={14} icon={faTrashCan} color="#666" />
    </IconButton>
  );
}

export const IconButton = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
`;
