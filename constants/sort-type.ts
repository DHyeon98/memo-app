import { sortGrid, sortList } from "./theme";

const sortTypes: any = {
  LIST() {
    return sortList;
  },
  GRID() {
    return sortGrid;
  },
};

export const extractSortStyle = (sortType: string) => {
  return sortTypes[sortType]();
};
