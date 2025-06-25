import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function onAddPressed() {
    setCount(count + 1);
  }

  function onMinusPressed() {
    if (count - 1 < 0) return;

    setCount(count - 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
          <Button title={"+"} onPress={onAddPressed} />
        </View>
        <Text style={styles.counterText}>{count}</Text>
        <View>
          <Button title={"-"} onPress={onMinusPressed} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  box: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    backgroundColor: "rgb(220, 118, 40)",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  counterText: {
    fontSize: 30,
  },
});
