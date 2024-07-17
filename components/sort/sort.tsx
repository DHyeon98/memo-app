import SortSvg from "../svg/sort";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "@/contexts/themProvider";
import { darkTheme, lightTheme } from "@/constants/theme";
import SortList from "./sort-list/sort-list";
import { Modal, View } from "react-native";
import styled from "styled-components/native";
import useDropdown from "@/hook/useDropdown";

export default function Sort() {
  const { theme } = useContext(ThemeContext);
  const sortRef = useRef(null);
  const [isOpen, setOpen] = useDropdown(sortRef, false);
  const handleShowToggle = () => {
    setOpen(!isOpen);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <View>
      <FlexContainer onPress={handleShowToggle}>
        <SortSvg
          width={30}
          height={30}
          fill={theme === "light" ? lightTheme.sortFill : darkTheme.sortFill}
        />
        <ButtonText theme={theme === "light" ? lightTheme : darkTheme}>
          보기
        </ButtonText>
      </FlexContainer>
      {isOpen && (
        <SortList ref={sortRef} theme={theme} handleClose={handleClose} />
      )}
    </View>
  );
}
const FlexContainer = styled.Pressable`
  flex-direction: row;
  align-items: center;
  gap: 5;
`;
const ButtonText = styled.Text`
  font-size: 16px;
  font-family: "Pretendard-Bold";
  color: ${({ theme }) => theme.textColor};
`;
