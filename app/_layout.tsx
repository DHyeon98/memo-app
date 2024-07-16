import { ThemeProvider } from "@/contexts/themProvider";
import { SortProvider } from "@/contexts/sortProvidedr";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <SortProvider>
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
    </SortProvider>
  );
}
