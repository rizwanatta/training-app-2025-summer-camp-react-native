import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ImageBackground,
} from "react-native";

export default function Login() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={{
        uri: "https://cdn.pixabay.com/photo/2024/02/17/15/59/plum-blossoms-8579641_1280.jpg",
      }}
      style={styles.container}
    >
      <Image style={styles.img} source={require("../../assets/icon.png")} />
      <TextInput
        placeholderTextColor={"white"}
        style={styles.input}
        placeholder="enter your email"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        secureTextEntry={true}
        placeholderTextColor={"white"}
      />

      <View style={styles.buttonCon}>
        <Button title="Login" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },

  img: {
    width: 100,
    height: 100,
    marginBottom: 100,
  },

  input: {
    width: "100%",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 100,
    padding: 20,
  },

  buttonCon: {
    width: "100%",
  },
});
