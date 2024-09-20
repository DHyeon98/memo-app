import { createContext, PropsWithChildren, useState } from 'react';

export interface ThemePropType {
  theme: string;
}

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

/**
 * 다크 모드 상태를 전역 변수로 관리합니다.
 */
export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState('light');
  // 상호작용 시 조건문을 통해 상태가 변경됩니다.
  const toggleTheme = () => setTheme(theme === 'light' ? 'black' : 'light');
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
