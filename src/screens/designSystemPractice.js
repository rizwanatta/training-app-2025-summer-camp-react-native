import { Text, TouchableOpacity, View } from "react-native";

export default function DesignSystemPractice() {
  return (
    <View className="flex-1 items-center justify-center dark:bg-gray-900 bg-pink-900">
      <TouchableOpacity className="bg-blue-500 dark:bg-red-300 rounded-full p-4 m-4">
        <Text className="text-white font-bold">Design System Practice</Text>
      </TouchableOpacity>
    </View>
  );
}
