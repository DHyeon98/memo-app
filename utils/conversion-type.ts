import { DARK_THEME, LIGHT_THEME } from '@/constants/theme';

/**
 * 다크 모드 상태를 인자로 받고 스타일을 반환하는 함수입니다.
 */
export const conversionType = (theme: string) => {
  return theme === 'light' ? LIGHT_THEME : DARK_THEME;
};
