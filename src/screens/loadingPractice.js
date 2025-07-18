import { Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

export default function LoadingPractice() {
  return (
    <View className="flex-1 items-center justify-center">
      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../animations/Loading.json")}
      />

      <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../animations/Success.json")}
      />
    </View>
  );
}
