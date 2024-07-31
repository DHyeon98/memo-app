import ErrorSubPage from '@/components/common/error/error-sub-page';
import Details from '@/components/details/details';
import { ErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components/native';

export default function DetailsPage() {
  return (
    <ErrorBoundary fallbackRender={() => <ErrorSubPage />}>
      <Details />
    </ErrorBoundary>
  );
}
