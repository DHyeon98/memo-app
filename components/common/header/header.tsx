import styled from 'styled-components/native';
import ThemeButton from '../button/theme-button/theme-button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { ThemeContext } from '@/contexts/themProvider';
import { StyleSheet, View } from 'react-native';
import { darkTheme, lightTheme, themeType } from '@/constants/theme';
import HeaderText from './header-text/header-text';
import HeaderLeft from './header-left/header-left';

export default function Header() {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView style={[styles.basic, theme === 'light' ? styles.light : styles.dark]}>
      <HeaderLeft theme={theme} />
      <View style={styles.textContainer}>
        <HeaderText />
      </View>
      <ThemeButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  basic: {
    zIndex: 10,
    position: 'relative',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  light: {
    backgroundColor: lightTheme.headerBg,
  },
  dark: {
    backgroundColor: darkTheme.headerBg,
  },
  textContainer: {
    zIndex: -1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 23.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
