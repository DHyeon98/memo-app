import { createContext, PropsWithChildren, useState } from "react";
type ThemeContextType = {
  theme: string;
  toggleTheme?: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
});

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
