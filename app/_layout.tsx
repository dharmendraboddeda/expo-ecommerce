import { Stack } from "expo-router";
import {
  PaperProvider,
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from "react-native-paper";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { useColorScheme } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const navigationTheme = adaptNavigationTheme({
    reactNavigationDark: DefaultTheme,
    reactNavigationLight: DefaultTheme,
  });

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer
        theme={
          colorScheme === "dark"
            ? navigationTheme.DarkTheme
            : navigationTheme.LightTheme
        }
        independent={true}
      >
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </NavigationContainer>
    </PaperProvider>
  );
}
