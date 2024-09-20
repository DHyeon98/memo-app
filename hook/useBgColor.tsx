import { useState } from 'react';

export const useBgColor = (initialColor: string, pressColor: string) => {
  const [bgColor, setBgColor] = useState(initialColor);
  const handlePressIn = () => {
    setBgColor(pressColor);
  };
  const handlePressOut = () => {
    setBgColor(initialColor);
  };
  return {
    bgColor,
    handlePressIn,
    handlePressOut,
  };
};
