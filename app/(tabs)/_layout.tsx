import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Text, useTheme } from "react-native-paper";
import MainScreen from ".";
import SettingsScreen from "./profile";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FavoriteScreen from "./favorite";
import BagScreen from "./bag";
import CartScreen from "./cart";

const Tab = createMaterialBottomTabNavigator();

export default function TabsLayout() {
  const theme = useTheme();

  return (
    <Tab.Navigator barStyle={{ height: 83 }}>
      <Tab.Screen
        name="home"
        component={MainScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={30}
              color={focused ? "#DB3022" : "#9B9B9B"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "cart" : "cart-outline"}
              size={30}
              color={focused ? "#DB3022" : "#9B9B9B"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="bag"
        component={BagScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "shopping" : "shopping-outline"}
              size={30}
              color={focused ? "#DB3022" : "#9B9B9B"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "heart" : "heart-outline"}
              size={30}
              color={focused ? "#DB3022" : "#9B9B9B"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "account" : "account-outline"}
              size={30}
              color={focused ? "#DB3022" : "#9B9B9B"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
