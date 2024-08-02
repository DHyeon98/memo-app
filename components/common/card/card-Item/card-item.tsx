import { useContext, useEffect, useRef, useState } from 'react';
import { Animated, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Link } from 'expo-router';
import { ThemeContext } from '@/contexts/themProvider';
import { SortContext } from '@/contexts/sortProvidedr';
import { sortComponent } from '@/constants/sort-type';
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
  const SortStyle = sortComponent(sort);
  const { theme } = useContext(ThemeContext);
  const stylesCondition = [styles.Link, theme === 'light' ? styles.light : styles.dark];
  const { opacityAni } = useFadeInAnimation(delay);

  return (
    <SortStyle>
      <Animated.View style={{ opacity: opacityAni, height: '100%' }}>
        <Link href={`detail/${date}`} style={stylesCondition}>
          <DateTextBox>
            <ThemeText fontFamily="Pretendard-Bold">{conversionTime(date)}</ThemeText>
          </DateTextBox>
          <ThemeText numberOfLines={3}>{text}</ThemeText>
        </Link>
      </Animated.View>
    </SortStyle>
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
    height: '100%',
  },
  dark: {
    backgroundColor: '#323741',
  },
  light: {
    backgroundColor: '#fff',
  },
});
