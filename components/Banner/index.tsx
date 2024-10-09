import React from "react";
import { View, Image } from "react-native";
import { Headline, Card, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

interface IBanner {
  imageUri?: string;
}

export const Banner = ({ imageUri }: IBanner) => {
  const navigation = useNavigation();

  return (
    <Card style={{ height: "auto", borderRadius: 0 }}>
      <Image
        style={{ width: "100%", height: "100%", resizeMode: "cover" }}
        source={imageUri ? { uri: imageUri } : require("@/assets/banner.png")}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          gap: 10,
          padding: 15,
          height: "auto",
          paddingBottom: 34,
        }}
      >
        <Headline
          style={{
            fontWeight: "bold",
            fontSize: 48,
            lineHeight: 48,
            color: "#ffffff",
          }}
        >
          Fashion
        </Headline>
        <Headline
          style={{
            fontWeight: "bold",
            fontSize: 48,
            lineHeight: 60,
            color: "#ffffff",
          }}
        >
          Sale
        </Headline>
        <Button
          theme={{ colors: { primary: "#ffffff" } }}
          style={{
            backgroundColor: "#DB3022",
            width: 160,
            paddingHorizontal: 10,
            height: 37,
          }}
        >
          Check
        </Button>
      </View>
    </Card>
  );
};
