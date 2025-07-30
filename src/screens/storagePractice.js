import { View, Text, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { saveData, getData } from "../managers/storageManager";
import { hideLoading } from "../managers/loadingManager";
import { useNavigation } from "@react-navigation/native";

export default function StoragePractice() {
  const [name, setName] = useState();
  const { replace } = useNavigation();

  useEffect(() => {
    alert("hi");
  }, []);

  useEffect(() => {
    return () => {
      alert("by by ");
    };
  }, []);

  function onSavePressed() {
    replace("Login");
    saveData("USER_NAME", name);
    hideLoading();
  }

  return (
    <View className="flex-1 justify-center px-10 gap-10">
      <Text className="text-3xl font-bold">{name}</Text>
      <TextInput
        className="border-2 border-black rounded-lg"
        placeholder="Enter your name"
        onChangeText={setName}
      />

      <Button title="Save" onPress={onSavePressed} />
    </View>
  );
}
