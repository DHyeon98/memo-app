import styled from 'styled-components/native';
import Card from '@/components/common/card/card';
import { useContext } from 'react';
import { ThemeContext } from '@/contexts/themProvider';
import { darkTheme, lightTheme } from '@/constants/theme';
import DataForm from '@/components/index/data-form/data-form';
import { getItem } from '@/apis';
import { useFonts } from '@/hook/usefonts';
import { SWRConfig } from 'swr';
import SearchButton from '@/components/index/search- button/search-button';

const fetcher = async () => {
  const data = await getItem('data');
  return data ? JSON.parse(data) : null;
};

export default function Index() {
  const { theme } = useContext(ThemeContext);
  const fontsLoaded = useFonts();

  if (!fontsLoaded) return null;
  return (
    <SWRConfig value={{ fetcher }}>
      <Container theme={theme === 'light' ? lightTheme : darkTheme}>
        <DataForm />
        <Card />
        <SearchButton />
      </Container>
    </SWRConfig>
  );
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  padding-top: 30px;
  padding: 30px 16px;
`;
