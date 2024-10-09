import React, { useState } from "react";
import { Button, Text, useTheme } from "react-native-paper";
import { View } from "react-native";
import { Banner } from "@/components/Banner";
import { createMaterialBottomTabNavigator } from "react-native-paper/lib/typescript/react-navigation";

export default function MainScreen() {
  const theme = useTheme();
  const [count, setCount] = useState(0);

  return (
    <View>
      <View style={{ height: 500 }}>
        <Banner />
      </View>
    </View>
  );
}
