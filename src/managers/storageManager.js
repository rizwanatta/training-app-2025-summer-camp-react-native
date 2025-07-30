import AsyncStorage from "@react-native-async-storage/async-storage";

async function saveData(key, value) {
  await AsyncStorage.setItem(key, value);
}

async function getData(key) {
  return await AsyncStorage.getItem(key);
}

export { saveData, getData };
