import { sortGrid, sortList } from './theme';

interface SortStyle {
  width: string;
}

const sortTypes: Record<string, () => SortStyle> = {
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
