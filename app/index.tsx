import styled from 'styled-components/native';
import Card from '@/components/common/card/card';
import { useContext } from 'react';
import { ThemeContext } from '@/contexts/themProvider';
import DataForm from '@/components/index/data-form/data-form';
import useSWR from 'swr';
import SearchButton from '@/components/index/search-button/search-button';
import CardSkeleton from '@/components/common/skeleton/card-skeleton/card-skeleton';
import { ErrorBoundary } from 'react-error-boundary';
import ThemeText from '@/components/common/theme-text/theme-text';
import { useLoadingSkeleton } from '@/hook/useLoadingSkeleton';
import { conversionType } from '@/utils/conversion-type';

export default function Index() {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading } = useSWR('data');
  const skeletonLoading = useLoadingSkeleton();

  return (
    <Container theme={conversionType(theme)}>
      <DataForm />
      <ErrorBoundary fallbackRender={() => <ThemeText>데이터를 불러오는 중 문제가 발생했습니다.</ThemeText>}>
        {skeletonLoading || isLoading ? <CardSkeleton /> : <Card data={data} />}
      </ErrorBoundary>
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
