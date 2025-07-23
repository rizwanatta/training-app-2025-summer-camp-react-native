import { View, Text, TouchableOpacity } from "react-native";

export default function AnimationPractice() {
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity>
        <Text
          style={{
            fontFamily: "Bitcount",
            fontSize: 80,
          }}
        >
          Press me
        </Text>
      </TouchableOpacity>
    </View>
  );
}
