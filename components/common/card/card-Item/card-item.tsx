import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemeContext } from '@/contexts/themProvider';
import { SortContext } from '@/contexts/sortProvidedr';
import { extractSortStyle } from '@/constants/sort-type';
import { conversionTime } from '@/utils/conversionTime';
import styled from 'styled-components/native';
import ThemeText from '../../theme-text/theme-text';

interface CardItemType {
  text: string;
  date: string;
}

export default function CardItem({ text, date }: CardItemType) {
  const { sort } = useContext(SortContext);
  const sortStyle = extractSortStyle(sort);
  const { theme } = useContext(ThemeContext);
  const stylesCondition = [styles.Link, theme === 'light' ? styles.light : styles.dark, sortStyle];

  return (
    <Link href={`detail/${date}`} style={stylesCondition}>
      <DateTextBox>
        <ThemeText fontFamily="Pretendard-Bold">{conversionTime(date)}</ThemeText>
      </DateTextBox>
      <ThemeText numberOfLines={3}>{text}</ThemeText>
    </Link>
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
