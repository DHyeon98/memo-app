export const conversionTime = (dateData: string) => {
  const date = new Date(Number(dateData));
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${month}월 ${day}일 ${hours}시 ${minutes}분`;
};
