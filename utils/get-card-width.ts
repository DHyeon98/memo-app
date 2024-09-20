/**
 * 카드 컴포넌트의 width값을 정렬 상태에 따라 계산하는 유틸입니다.
 */
export const getCardWidth = (sortType: string, width: number) => {
  if (sortType === 'LIST') return width - 32;
  if (sortType === 'GRID') return width / 2 - 21;
  throw new Error('등록된 정렬 방법이 없습니다.');
};
