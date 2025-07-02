import { Button, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import ConfettiCannon from "react-native-confetti-cannon";

export default function ConfettiButton() {
  const confettiRef = useRef();
  const boxRef = useRef();

  function onCheeTahPressed() {
    if (confettiRef) {
      confettiRef.current.start();
    }
  }

  return (
    <View ref={boxRef}>
      <Button onPress={onCheeTahPressed} title={"chee tanh"} />
      <ConfettiCannon ref={confettiRef} count={200} origin={{ x: -10, y: 0 }} />
    </View>
  );
}

const styles = StyleSheet.create({});
