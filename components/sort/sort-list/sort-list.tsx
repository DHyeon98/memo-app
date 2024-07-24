import styled from 'styled-components/native';
import { StyleSheet, View } from 'react-native';
import { ThemePropType } from '@/contexts/themProvider';
import { useContext } from 'react';
import { SortContext } from '@/contexts/sortProvidedr';
import SortButton from '../sort-button/sort-button';
import SortSvg from '@/components/svg/sort';
import { darkTheme, lightTheme, themeType } from '@/constants/theme';
import GridSvg from '@/components/svg/grid';
import ThemeText from '@/components/theme-text/theme-text';

interface SortListType extends ThemePropType {
  closeModal: () => void;
}

export default function SortList({ theme, closeModal }: SortListType) {
  const { toggleSort } = useContext(SortContext);
  const handleSort = (sortType: string) => {
    toggleSort(sortType);
  };
  return (
    <View style={[styles.container, theme === 'light' ? styles.light : styles.dark]}>
      <FlexContainer>
        <SortButton handleSort={() => handleSort('LIST')} closeModal={closeModal}>
          <ThemeText>리스트 스타일</ThemeText>
          <SortSvg width={30} height={30} fill={themeType(theme)} />
        </SortButton>
        <SortButton handleSort={() => handleSort('GRID')} closeModal={closeModal}>
          <ThemeText>격자 스타일</ThemeText>
          <GridSvg width={30} height={30} fill={themeType(theme)} />
        </SortButton>
      </FlexContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 10,
    borderRadius: 8,
  },
  light: {
    backgroundColor: '#fff',
  },
  dark: {
    backgroundColor: 'rgb(69 78 92)',
  },
});
const FlexContainer = styled.View`
  gap: 10px;
`;
