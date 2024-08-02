import { SortGrid, SortList } from './theme';
import { View } from 'react-native';

export const sortComponent = (sortType: string) => {
  if (sortType === 'LIST') return SortList;
  if (sortType === 'GRID') return SortGrid;
  return View;
};
