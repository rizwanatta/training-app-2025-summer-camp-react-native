import {
  Button,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { launchCameraAsync } from "expo-image-picker";
import Icon from "@expo/vector-icons/MaterialIcons";

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

  function onCrossPressed() {
    setImage(null);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCameraPress}>
        <Image source={{ uri: image }} style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onCrossPressed} style={styles.imageCancelIcon}>
        <Icon name="cancel" size={50} color="red" />
      </TouchableOpacity>
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
    borderRadius: 100,
    borderWidth: 2,
  },

  imageCancelIcon: {
    marginTop: -230,
    marginRight: -160,
  },
});
