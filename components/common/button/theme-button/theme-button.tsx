import { themeType } from '@/constants/theme';
import { ThemeContext } from '@/contexts/themProvider';
import { useRoute } from '@react-navigation/native';
import { useContext, useRef } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

/**
 * 다크 모드의 상태를 변경할 때 사용하는 컴포넌트 입니다.
 */
export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const animation = useRef(new Animated.Value(1)).current;
  const { name } = useRoute();

  // 상호작용시 다크 모드의 상태가 변경되고,
  // 약간의 bounce가 있는 상태로 애니메이션이 실행됩니다.
  const handleTheme = () => {
    toggleTheme();
    Animated.spring(animation, {
      toValue: theme === 'light' ? 30 : 0,
      bounciness: 10,
      useNativeDriver: false,
    }).start();
  };
  return (
    <Button name={name} theme={themeType(theme)} onPress={name === 'index' ? handleTheme : undefined}>
      <ButtonText theme={themeType(theme)} style={{ left: animation }} />
    </Button>
  );
}

const Button = styled.Pressable<{ name: string }>`
  justify-content: center;
  padding: 4px;
  border: none;
  border-radius: 50px;
  width: 60px;
  background-color: ${({ theme }) => theme.buttonBg};
  opacity: ${({ name }) => (name === 'index' ? 1 : 0)};
`;
const ButtonText = styled(Animated.View)`
  width: 23px;
  height: 23px;
  background-color: ${({ theme }) => theme.buttonColor};
  border-radius: 50px;
`;
