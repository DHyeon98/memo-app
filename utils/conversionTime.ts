export const conversionTime = (dateData: string) => {
  const date = new Date(Number(dateData));
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
};
