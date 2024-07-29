import styled from 'styled-components/native';
import Card from '@/components/common/card/card';
import { useContext, Suspense } from 'react';
import { ThemeContext } from '@/contexts/themProvider';
import { themeType } from '@/constants/theme';
import DataForm from '@/components/index/data-form/data-form';
import useSWR from 'swr';
import SearchButton from '@/components/index/search- button/search-button';
import CardSkeleton from '@/components/common/skeleton/card-skeleton/card-skeleton';
import { StyleSheet } from 'react-native';

export default function Index() {
  const { theme } = useContext(ThemeContext);
  const { data, isValidating } = useSWR('data');

  return (
    <Container theme={themeType(theme)} style={styles.container}>
      <DataForm />
      {isValidating ? <CardSkeleton /> : <Card data={data} />}
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
