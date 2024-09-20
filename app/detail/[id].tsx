import ErrorSubPage from '@/components/common/error/error-sub-page';
import Details from '@/components/details/details';
import { ErrorBoundary } from 'react-error-boundary';

export default function DetailsPage() {
  return (
    <ErrorBoundary fallbackRender={() => <ErrorSubPage />}>
      <Details />
    </ErrorBoundary>
  );
}
