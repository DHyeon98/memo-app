import ErrorSubPage from '@/components/common/error/error-sub-page';
import SkeletonItem from '@/components/common/skeleton/skeleton-Item';
import Details from '@/components/details/details';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Text } from 'react-native';
import styled from 'styled-components/native';

export default function DetailsPage() {
  return (
    <ErrorBoundary fallbackRender={() => <ErrorSubPage />}>
      <Suspense fallback={<Text>로딩중</Text>}>
        <Details />
      </Suspense>
    </ErrorBoundary>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  padding-top: 30px;
  padding: 30px 16px;
`;
