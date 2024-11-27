import { Stack } from "expo-router";

import "@/global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen
        name="new-plant"
        options={{ presentation: "modal", title: "New Plant" }}
      />
    </Stack>
  );
}
