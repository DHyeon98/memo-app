import { useState } from 'react';

/**
 * 상호작용 컬러를 반환하는 커스텀 훅입니다.
 */
export const useBgColor = (initialColor: string, pressColor: string) => {
  const [bgColor, setBgColor] = useState(initialColor);

  // pressIn 될 때의 컬러를 설정하는 함수 입니다.
  const handlePressIn = () => setBgColor(pressColor);
  // pressOut 될 때의 컬러를 설정하는 함수 입니다.
  const handlePressOut = () => setBgColor(initialColor);
  return {
    bgColor,
    handlePressIn,
    handlePressOut,
  };
};
