import styled from 'styled-components/native';
import Card from '@/components/common/card/card';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@/contexts/themProvider';
import { themeType } from '@/constants/theme';
import DataForm from '@/components/index/data-form/data-form';
import useSWR from 'swr';
import SearchButton from '@/components/index/search-button/search-button';
import CardSkeleton from '@/components/common/skeleton/card-skeleton/card-skeleton';
import { StyleSheet, Text } from 'react-native';
import { ErrorBoundary } from 'react-error-boundary';
import { setInitialData } from '@/constants/set-initial-data';

export default function Index() {
  const { theme } = useContext(ThemeContext);
  const { data } = useSWR('data');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInitialData();
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container theme={themeType(theme)} style={styles.container}>
      <DataForm />
      <ErrorBoundary fallbackRender={() => <Text>데이터를 불러오는 중 문제가 발생했습니다.</Text>}>
        {isLoading ? <CardSkeleton /> : <Card data={data} />}
      </ErrorBoundary>
      <SearchButton />
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 16,
  },
});
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  padding-top: 30px;
  padding: 30px 16px;
`;
