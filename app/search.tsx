import ErrorSubPage from '@/components/common/error/error-sub-page';
import Search from '@/components/search/search';
import { ErrorBoundary } from 'react-error-boundary';

export default function SearchPage() {
  return (
    <ErrorBoundary fallbackRender={() => <ErrorSubPage />}>
      <Search />
    </ErrorBoundary>
  );
}
