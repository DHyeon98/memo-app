import { darkTheme, lightTheme } from "@/constants/theme";
import { ThemeContext } from "@/contexts/themProvider";
import { useContext, useRef } from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const animation = useRef(new Animated.Value(1)).current;

  const handleTheme = () => {
    toggleTheme();
    Animated.spring(animation, {
      toValue: theme === "light" ? 30 : 0,
      bounciness: 10,
      useNativeDriver: false,
    }).start();
  };
  return (
    <Button
      theme={theme === "light" ? lightTheme : darkTheme}
      onPress={handleTheme}
    >
      <ButtonText
        theme={theme === "light" ? lightTheme : darkTheme}
        style={{ left: animation }}
      />
    </Button>
  );
}
const Button = styled.Pressable`
  padding: 2px;
  border: none;
  border-radius: 50px;
  width: 60px;
  background-color: ${({ theme }) => theme.buttonBg};
`;
const ButtonText = styled(Animated.View)`
  width: 23px;
  height: 23px;
  background-color: ${({ theme }) => theme.buttonColor};
  border-radius: 50px;
`;
