import { themeType } from "@/constants/theme";
import { ThemeContext } from "@/contexts/themProvider";
import { useRoute } from "@react-navigation/native";
import { useContext, useRef } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const animation = useRef(new Animated.Value(1)).current;
  const {name} = useRoute();

  const handleTheme = () => {
    toggleTheme();
    Animated.spring(animation, {
      toValue: theme === "light" ? 30 : 0,
      bounciness: 10,
      useNativeDriver: false,
    }).start();
  };
  return (
  <Button name={name} theme={themeType(theme)} onPress={name === 'index' ? handleTheme: undefined}>
    <ButtonText theme={themeType(theme)} style={{ left: animation }} />
  </Button>
  );
}


const Button = styled.Pressable<{name: string}>`
  justify-content: center;
  padding: 4px;
  border: none;
  border-radius: 50px;
  width: 60px;
  background-color: ${({ theme }) => theme.buttonBg};
  opacity: ${({ name }) => name === 'index' ? 1 : 0};
`;
const ButtonText = styled(Animated.View)`
  width: 23px;
  height: 23px;
  background-color: ${({ theme }) => theme.buttonColor};
  border-radius: 50px;
`;
