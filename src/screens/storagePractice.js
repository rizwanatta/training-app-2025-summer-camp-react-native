import { View, Text, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { saveData, getData } from "../managers/storageManager";

export default function StoragePractice() {
  const [name, setName] = useState();

  useEffect(() => {
    const userName = getData("USER_NAME");
    if (userName) {
      setName(userName);
    }
  }, []);

  function onSavePressed() {
    saveData("USER_NAME", name);
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
