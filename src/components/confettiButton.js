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

  function onCheeTahStopPressed() {
    if (confettiRef) {
      confettiRef.current.stop();
    }
  }

  function onCheeTahResumePressed() {
    if (confettiRef) {
      confettiRef.current.resume();
    }
  }

  return (
    <View ref={boxRef}>
      <Button onPress={onCheeTahPressed} title={"chee tanh"} />
      <ConfettiCannon ref={confettiRef} count={200} origin={{ x: -10, y: 0 }} />
      <Button onPress={onCheeTahStopPressed} title={"chee tanh stop"} />
      <Button onPress={onCheeTahResumePressed} title={"chee tanh resume"} />
    </View>
  );
}

const styles = StyleSheet.create({});
