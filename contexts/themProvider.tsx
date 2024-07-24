import { createContext, PropsWithChildren, useState } from 'react';

export interface ThemePropType {
  theme: string;
}

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'black' : 'light');
  };
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
