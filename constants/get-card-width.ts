export const getCardWidth = (sortType: string, width: number) => {
  if (sortType === 'LIST') return width - 32;
  if (sortType === 'GRID') return width / 2 - 21;
  throw new Error('등록된 정렬 방법이 없습니다.');
};
