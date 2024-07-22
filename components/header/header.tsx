import styled from "styled-components/native";
import ThemeButton from "../button/theme-button/theme-button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/themProvider";
import { StyleSheet } from "react-native";
import { darkTheme, lightTheme, themeType } from "@/constants/theme";
import LogoSvg from "../svg/logo";
import Sort from "../sort/sort";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  const { name } = useRoute();

  return (
    <SafeAreaView
      style={[styles.basic, theme === "light" ? styles.light : styles.dark]}
    >
      <Sort />
      <HeaderTextContainer>
        <HeaderText theme={themeType(theme)}>
          {name === "index" ? "메모장" : "검색하기"}
        </HeaderText>
        <LogoSvg width={30} height={30} fill={themeType(theme)} />
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
`;
const styles = StyleSheet.create({
  basic: {
    zIndex: 10,
    position: "relative",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
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
