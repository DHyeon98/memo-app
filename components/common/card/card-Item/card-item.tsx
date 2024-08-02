import { useContext, useEffect, useRef, useState } from 'react';
import { Animated, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Link } from 'expo-router';
import { ThemeContext } from '@/contexts/themProvider';
import { SortContext } from '@/contexts/sortProvidedr';
import { extractSortStyle } from '@/constants/sort-type';
import { conversionTime } from '@/utils/conversionTime';
import styled from 'styled-components/native';
import ThemeText from '../../theme-text/theme-text';
import { useFadeInAnimation } from '@/hook/useFadeInAnimation';

interface CardItemType {
  text: string;
  date: string;
  delay: number;
}

export default function CardItem({ text, date, delay }: CardItemType) {
  const { sort } = useContext(SortContext);
  const sortStyle = extractSortStyle(sort);
  const { theme } = useContext(ThemeContext);
  const stylesCondition = [styles.Link, theme === 'light' ? styles.light : styles.dark, sortStyle];
  const { opacityAni, translateAni } = useFadeInAnimation(delay);
  return (
    <Animated.View
      style={[
        stylesCondition as StyleProp<ViewStyle>,
        { opacity: opacityAni, transform: [{ translateX: translateAni }] },
      ]}
    >
      <Link href={`detail/${date}`}>
        <DateTextBox>
          <ThemeText fontFamily="Pretendard-Bold">{conversionTime(date)}</ThemeText>
        </DateTextBox>
        <ThemeText numberOfLines={3}>{text}</ThemeText>
      </Link>
    </Animated.View>
  );
}

const DateTextBox = styled.View`
  margin-bottom: 5px;
`;

const styles = StyleSheet.create({
  Link: {
    padding: 10,
    flexShrink: 1,
    justifyContent: 'space-between',
  },
  dark: {
    backgroundColor: '#323741',
  },
  light: {
    backgroundColor: '#fff',
  },
});
