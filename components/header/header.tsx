import styled from "styled-components/native";
import ThemeButton from "../button/theme-button/theme-button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/themProvider";
import { StyleSheet } from "react-native";
import { darkTheme, lightTheme, themeType } from "@/constants/theme";
import HeaderText from "./header-text/header-text";
import HeaderLeft from "./header-left/header-left";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={[styles.basic, theme === "light" ? styles.light : styles.dark]}
    >
      <HeaderLeft theme={theme}/>
      <HeaderTextContainer>
        <HeaderText theme={theme}/>
      </HeaderTextContainer>
      <ThemeButton />
    </SafeAreaView>
  );
}

const HeaderTextContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const styles = StyleSheet.create({
  basic: {
    zIndex: 10,
    position: "relative",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  light: {
    backgroundColor: lightTheme.headerBg,
  },
  dark: {
    backgroundColor: darkTheme.headerBg,
  },
});