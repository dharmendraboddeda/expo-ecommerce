import React, { useState } from "react";
import { Button, Text, useTheme, Appbar } from "react-native-paper";
FlipInXDown;
import { BottomNavigation } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default function MainScreen() {
  const theme = useTheme();
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "music", title: "Music", icon: "music-circle" },
    { key: "albums", title: "Albums", icon: "album" },
    { key: "recents", title: "Recents", icon: "history" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Counter App" />
        <Appbar.Action icon="magnify" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>
      <Text style={{ color: theme.colors.onSurface, margin: 20 }}>
        Counter: {count}
      </Text>
      <Button
        mode="contained"
        onPress={() => setCount(count + 1)}
        style={{ margin: 20 }}
      >
        Increment
      </Button>
    </>
  );
}
