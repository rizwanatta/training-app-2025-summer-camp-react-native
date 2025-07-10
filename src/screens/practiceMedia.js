import { Button, StyleSheet, Image, View } from "react-native";
import React, { useState } from "react";
import { launchCameraAsync } from "expo-image-picker";

export default function PracticeMedia() {
  const [image, setImage] = useState();

  async function onCameraPress() {
    const result = await launchCameraAsync({
      mediaTypes: ["images", "videos"],
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  }

  return (
    <View style={styles.container}>
      <Button title="Camera" onPress={onCameraPress} />
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
});
