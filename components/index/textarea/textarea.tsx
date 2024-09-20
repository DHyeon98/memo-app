import { darkTheme, lightTheme } from '@/constants/theme';
import { ThemeContext } from '@/contexts/themProvider';
import { useContext } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface TextareaType extends TextInputProps {
  type: 'basic' | 'details';
}

/**
 * textarea 컴포넌트 입니다.
 * type은 basic과 details가 있습니다.
 * basic은 메인에서 사용하는 높이가 작은 크기의 인풋이고,
 * details는 상세페이지에서 사용하는 높이가 큰 크기의 인풋입니다.
 */
export default function Textarea(props: TextareaType) {
  const { theme } = useContext(ThemeContext);
  return (
    <TextInput
      style={[styles[props.type], theme === 'light' ? styles.light : styles.dark]}
      multiline={true}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  basic: {
    width: '100%',
    height: 100,
    borderColor: `#47b976`,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    fontSize: 14,
    fontFamily: 'Pretendard',
  },
  light: {
    backgroundColor: `${lightTheme.inputBg}`,
    color: `${lightTheme.textColor}`,
  },
  dark: {
    backgroundColor: `${darkTheme.inputBg}`,
    color: `${darkTheme.textColor}`,
  },
  details: {
    width: '100%',
    height: 300,
    borderWidth: 0,
    padding: 10,
    textAlignVertical: 'top',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'Pretendard',
  },
});
