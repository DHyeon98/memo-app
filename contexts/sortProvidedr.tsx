import { createContext, PropsWithChildren, useState } from 'react';

export const SortContext = createContext({
  sort: 'LIST',
  toggleSort: (sortType: string) => {},
});

/**
 * 정렬 상태를 전역 변수로 관리합니다.
 */
export const SortProvider = ({ children }: PropsWithChildren) => {
  const [sort, setSort] = useState('LIST');
  // 상호작용 시 sortType으로 상태가 변경되는 함수 입니다.
  const toggleSort = (sortType: string) => setSort(sortType);
  return <SortContext.Provider value={{ sort, toggleSort }}>{children}</SortContext.Provider>;
};
