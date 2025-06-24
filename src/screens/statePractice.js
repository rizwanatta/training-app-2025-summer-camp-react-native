import { useState } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";

export default function StatePractice() {
  // business logic

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Text>{email}</Text>
      <Text>{password}</Text>

      <TextInput
        style={styles.input}
        placeholder="enter email"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="enter password"
        onChangeText={setPassword}
      />
      <Button title="Login" />
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 20,
  },

  input: {
    borderWidth: 1,
    borderRadius: 5,
  },
});
