import styled from "styled-components/native";
import ThemeButton from "../button/theme-button/theme-button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/themProvider";
import { StyleSheet } from "react-native";
import { darkTheme, lightTheme } from "@/constants/theme";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={[styles.basic, theme === "light" ? styles.light : styles.dark]}
    >
      <HeaderText theme={theme === "light" ? lightTheme : darkTheme}>
        메모장 📝
      </HeaderText>
      <ThemeButton />
    </SafeAreaView>
  );
}
const HeaderText = styled.Text`
  font-size: 20px;
  font-family: "Pretendard-Bold";
  color: ${({ theme }) => theme.textColor};
`;
const styles = StyleSheet.create({
  basic: {
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
