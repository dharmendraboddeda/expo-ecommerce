import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme, Text } from "react-native-paper";
import MainScreen from ".";
import SettingsScreen from "./profile";
import FavoriteScreen from "./favorite";
import BagScreen from "./bag";
import CartScreen from "./cart";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 83,
          backgroundColor: theme.colors.surface,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderTopWidth: 0,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Home")
            iconName = focused ? "home" : "home-outline";
          else if (route.name === "Cart")
            iconName = focused ? "cart" : "cart-outline";
          else if (route.name === "Bag")
            iconName = focused ? "shopping" : "shopping-outline";
          else if (route.name === "Favorite")
            iconName = focused ? "heart" : "heart-outline";
          else if (route.name === "Profile")
            iconName = focused ? "account" : "account-outline";

          let label;
          if (route.name === "Home") label = "Home";
          else if (route.name === "Cart") label = "Cart";
          else if (route.name === "Bag") label = "Bag";
          else if (route.name === "Favorite") label = "Favorite";
          else if (route.name === "Profile") label = "Profile";

          return (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name={iconName}
                size={30}
                color={focused ? "#DB3022" : "#9B9B9B"}
              />
              <Text style={{ color: focused ? "#DB3022" : "#9B9B9B" }}>
                {label}
              </Text>
            </View>
          );
        },

        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={MainScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Bag"
        component={BagScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Favorite"
        component={FavoriteScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}
