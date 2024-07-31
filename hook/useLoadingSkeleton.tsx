import { useEffect, useState } from 'react';

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
