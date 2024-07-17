import styled from "styled-components/native";
import { StyleSheet, View } from "react-native";
import { ThemePropType } from "@/contexts/themProvider";
import { forwardRef, useContext } from "react";
import { SortContext } from "@/contexts/sortProvidedr";
import SortButton from "../sort-button/sort-button";
import SortSvg from "@/components/svg/sort";
import { darkTheme, lightTheme } from "@/constants/theme";
import GridSvg from "@/components/svg/grid";

interface SortType extends ThemePropType {
  handleClose: () => void;
}

const SortList = forwardRef<View, SortType>(({ theme, handleClose }, ref) => {
  const { toggleSort } = useContext(SortContext);
  const handleSort = (sortType: string) => {
    toggleSort(sortType);
    handleClose();
  };
  return (
    <View
      style={[styles.container, theme === "light" ? styles.light : styles.dark]}
      ref={ref}
    >
      <FlexContainer>
        <SortButton handleSort={() => handleSort("list")}>
          <SortSvg
            width={50}
            height={50}
            fill={theme === "light" ? lightTheme.sortFill : darkTheme.sortFill}
          />
        </SortButton>
        <SortButton handleSort={() => handleSort("grid")}>
          <GridSvg
            width={50}
            height={50}
            fill={theme === "light" ? lightTheme.sortFill : darkTheme.sortFill}
          />
        </SortButton>
      </FlexContainer>
    </View>
  );
});
export default SortList;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    zIndex: 10,
    position: "absolute",
    top: 30,
    left: 0,
    padding: 10,
    borderRadius: 8,
  },
  light: {
    backgroundColor: "#fff",
  },
  dark: {
    backgroundColor: "rgb(69 78 92)",
  },
});
const FlexContainer = styled.View`
  flex-direction: row;
  gap: 5px;
  margin-top: 5px;
`;
