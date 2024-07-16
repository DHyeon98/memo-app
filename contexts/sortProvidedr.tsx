import { createContext, PropsWithChildren, useState } from "react";

export const SortContext = createContext({
  sort: "basic",
  toggleSort: (sortType: string) => {},
});

export const SortProvider = ({ children }: PropsWithChildren) => {
  const [sort, setSort] = useState("basic");
  const toggleSort = (sortType: string) => {
    setSort(sortType);
  };
  return (
    <SortContext.Provider value={{ sort, toggleSort }}>
      {children}
    </SortContext.Provider>
  );
};
