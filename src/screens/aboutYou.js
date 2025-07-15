import { CameraView } from "expo-camera";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import React, { useRef, useState } from "react";

export default function AboutYou() {
  const [cameraType, setCameraType] = useState("back");
  const [cameraFlipIcon, setCameraFlipIcon] = useState("cameraswitch");
  const [imageTaken, setImageTaken] = useState("");

  const [images, setImages] = useState([]);

  const cameraRef = useRef();

  function onCameraFlipPressed() {
    if (cameraType === "back") {
      setCameraType("front");
      setCameraFlipIcon("flip-camera-android");
    } else {
      setCameraType("back");
      setCameraFlipIcon("cameraswitch");
    }
  }

  async function onCameraPressed() {
    try {
      // checking if cameraRef is working with camera or not
      if (cameraRef.current) {
        const data = await cameraRef.current.takePictureAsync();
        setImageTaken(data);

        setImages([...images, data]);
        console.log(typeof images);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <CameraView
        ref={cameraRef}
        style={styles.cameraStyle}
        facing={cameraType}
      >
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={onCameraPressed}>
            <Icon name="camera" size={50} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={onCameraFlipPressed}>
            <Icon name={cameraFlipIcon} size={50} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cameraStyle: {
    flex: 1 / 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  iconsContainer: {
    flexDirection: "row",
    gap: 20,
  },

  image: {
    width: 200,
    height: 200,
    borderWidth: 2,
  },
});
