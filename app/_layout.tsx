import Header from "@/components/header/header";
import ThemeButton from "@/components/theme-button/theme-button";
import { ThemeContext, ThemeProvider } from "@/contexts/themProvider";
import { Stack } from "expo-router";
import { useContext } from "react";

export default function RootLayout() {
  const { theme } = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
