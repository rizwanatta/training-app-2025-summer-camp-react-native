import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";

export default function Listing() {
  const data = ["🔥"];

  return (
    <ScrollView>
      {data.map((item) => (
        <Text style={styles.textStyle}>{item}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 300,
  },

  textStyle: {
    fontSize: 40,
    color: "#ffffff",
  },
});
