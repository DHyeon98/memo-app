import styled from 'styled-components/native';
import Card from '@/components/common/card/card';
import { useContext, Suspense } from 'react';
import { ThemeContext } from '@/contexts/themProvider';
import { themeType } from '@/constants/theme';
import DataForm from '@/components/index/data-form/data-form';
import { useFonts } from '@/hook/usefonts';
import useSWR from 'swr';
import SearchButton from '@/components/index/search- button/search-button';
import CardSkeleton from '@/components/common/skeleton/card-skeleton';

export default function Index() {
  const { theme } = useContext(ThemeContext);
  const { data } = useSWR('data');
  const fontsLoaded = useFonts();

  if (!fontsLoaded) return null;
  return (
    <Container theme={themeType(theme)}>
      <DataForm />
      {/* <Card data={data} /> */}
      <CardSkeleton />
      <SearchButton />
    </Container>
  );
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  padding-top: 30px;
  padding: 30px 16px;
`;
