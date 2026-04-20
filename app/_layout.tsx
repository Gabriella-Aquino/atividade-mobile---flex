import {
  DefaultTheme,
  type Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export const unstable_settings = {
  anchor: "(tabs)",
};

const APP_BACKGROUND = "#b4bad4";

const CustomTheme: Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: APP_BACKGROUND,
    card: APP_BACKGROUND,
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={CustomTheme}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: APP_BACKGROUND, paddingTop:50 }}>
          <Stack screenOptions={{ contentStyle: { backgroundColor: APP_BACKGROUND } }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{ presentation: "modal", title: "Modal" }}
            />
          </Stack>
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
