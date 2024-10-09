import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Text, useTheme } from "react-native-paper";
import MainScreen from ".";
import SettingsScreen from "./profile";

const Tab = createMaterialBottomTabNavigator();

export default function TabsLayout() {
  const theme = useTheme();

  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={MainScreen} />
      <Tab.Screen name="profile" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
