import { useEffect, useState } from 'react';

/**
 * 스켈레톤 UI의 로딩시간을 설정하는 커스텀 훅입니다.
 */
export const useLoadingSkeleton = () => {
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSkeletonLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return skeletonLoading;
};
