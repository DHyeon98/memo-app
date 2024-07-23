import { ThemeProvider } from "@/contexts/themProvider";
import { SortProvider } from "@/contexts/sortProvidedr";
import { Stack } from "expo-router";
import Header from "@/components/header/header";

export default function RootLayout() {
  return (
    <SortProvider>
      <ThemeProvider>
        <Stack screenOptions={{header: () => <Header />}}>
          <Stack.Screen
            name="index"
          />
          <Stack.Screen
            name="search"
          />
        </Stack>
      </ThemeProvider>
    </SortProvider>
  );
}
