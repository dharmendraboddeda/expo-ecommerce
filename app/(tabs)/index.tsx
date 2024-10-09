import React, { useState } from "react";
import { Button, Text, useTheme } from "react-native-paper";
import { View } from "react-native";
import { Banner } from "@/components/Banner";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

export default function MainScreen() {
  const theme = useTheme();
  const [count, setCount] = useState(0);

  return (
    <View>
      <View style={{ height: 538 }}>
        <Banner />
      </View>
    </View>
  );
}
