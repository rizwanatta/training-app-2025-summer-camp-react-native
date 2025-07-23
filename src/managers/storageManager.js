import AsyncStorage from "@react-native-async-storage/async-storage";

function saveData(key, value) {
  AsyncStorage.setItem(key, value);
}

function getData(key) {
  return AsyncStorage.getItem(key);
}

export { saveData, getData };
