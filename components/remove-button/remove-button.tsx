import styled from "styled-components/native";

export default function RemoveButton() {
  return (
    <UtilsButton backgroundColor="rgb(254 97 97);">
      <UtilsText>삭제</UtilsText>
    </UtilsButton>
  );
}

interface StyledPropsType {
  backgroundColor: string;
}

export const UtilsButton = styled.Pressable<StyledPropsType>`
  padding: 8px 15px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 4px;
`;
export const UtilsText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-family: "Pretendard";
`;
