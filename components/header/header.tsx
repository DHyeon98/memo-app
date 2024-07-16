import styled from "styled-components/native";
import ThemeButton from "../button/theme-button/theme-button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/themProvider";
import { StyleSheet } from "react-native";
import { darkTheme, lightTheme } from "@/constants/theme";
import SortSvg from "../svg/sort";
import LogoSvg from "../svg/logo";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={[styles.basic, theme === "light" ? styles.light : styles.dark]}
    >
      <SortSvg
        width={30}
        height={30}
        fill={theme === "light" ? lightTheme.sortFill : darkTheme.sortFill}
      />
      <HeaderTextContainer>
        <HeaderText theme={theme === "light" ? lightTheme : darkTheme}>
          메모장
        </HeaderText>
        <LogoSvg
          width={30}
          height={30}
          fill={theme === "light" ? lightTheme.sortFill : darkTheme.sortFill}
        />
      </HeaderTextContainer>
      <ThemeButton />
    </SafeAreaView>
  );
}
const HeaderText = styled.Text`
  font-size: 20px;
  font-family: "Pretendard-Bold";
  color: ${({ theme }) => theme.textColor};
`;
const HeaderTextContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 41px;
`;
const styles = StyleSheet.create({
  basic: {
    position: "relative",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 30,
  },
  light: {
    backgroundColor: lightTheme.headerBg,
  },
  dark: {
    backgroundColor: darkTheme.headerBg,
  },
});
