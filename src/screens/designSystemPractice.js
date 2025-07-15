import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useColorScheme } from "react-native";

export default function DesignSystemPractice() {
  const colorScheme = useColorScheme();
  const styles = colorScheme === "dark" ? stylesDark : stylesLight;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Practice Design System</Text>
      </TouchableOpacity>
    </View>
  );
}

const stylesLight = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});

const stylesDark = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  button: {
    backgroundColor: "red",
    width: 200,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
