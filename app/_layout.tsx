import Header from "@/components/header/header";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: (props) => <Header />,
        }}
      />
    </Stack>
  );
}
