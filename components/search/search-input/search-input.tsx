import { darkTheme, lightTheme } from '@/constants/theme';
import { ThemePropType } from '@/contexts/themProvider';
import { StyleSheet, TextInput } from 'react-native';
import { Dispatch } from 'react';

interface SearchInputType extends ThemePropType {
  text: string;
  setText: Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({ theme, text, setText }: SearchInputType) {
  return <TextInput value={text} onChangeText={setText} style={theme === 'light' ? styles.light : styles.dark} />;
}
const styles = StyleSheet.create({
  light: {
    flexShrink: 1,
    width: '100%',
    borderColor: `#47b976`,
    backgroundColor: `${lightTheme.inputBg}`,
    borderWidth: 1,
    padding: 10,
    fontSize: 14,
    fontFamily: 'Pretendard',
    color: `${lightTheme.textColor}`,
  },
  dark: {
    flexShrink: 1,
    width: '100%',
    borderColor: '#47b976',
    backgroundColor: `${darkTheme.inputBg}`,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    fontSize: 14,
    fontFamily: 'Pretendard',
    color: `${darkTheme.textColor}`,
  },
});
