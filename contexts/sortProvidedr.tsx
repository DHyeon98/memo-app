import { createContext, PropsWithChildren, useState } from 'react';

export const SortContext = createContext({
  sort: 'LIST',
  toggleSort: (sortType: string) => {},
});

export const SortProvider = ({ children }: PropsWithChildren) => {
  const [sort, setSort] = useState('LIST');
  const toggleSort = (sortType: string) => {
    setSort(sortType);
  };
  return <SortContext.Provider value={{ sort, toggleSort }}>{children}</SortContext.Provider>;
};
