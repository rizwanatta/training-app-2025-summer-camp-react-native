import { View, Image, Button } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  withRepeat,
  withSequence,
} from "react-native-reanimated";
import { MotiView } from "moti";

const ANGLE = 10;
const TIME = 100;
const EASING = Easing.elastic(1.5);

export default function AnimationPractice() {
  const width = useSharedValue(200);

  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotation.value}deg` }],
  }));

  const handlePress = () => {
    rotation.value = withSequence(
      // deviate left to start from -ANGLE
      withTiming(-ANGLE, { duration: TIME / 2, easing: EASING }),
      // wobble between -ANGLE and ANGLE 7 times
      withRepeat(
        withTiming(ANGLE, {
          duration: TIME,
          easing: EASING,
        }),
        7,
        true
      ),
      // go back to 0 at the end
      withTiming(0, { duration: TIME / 2, easing: EASING })
    );
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Animated.View
        style={[
          {
            width,
            height: 300,
          },
          animatedStyle,
        ]}
      >
        <Image
          className="w-[200px] h-[200px]"
          source={{
            uri: "https://cdn.pixabay.com/photo/2016/10/15/18/59/coffee-cup-1743338_1280.png",
          }}
        />
      </Animated.View>

      <MotiView
        className="w-[200px] h-[200px] rounded-full bg-red-500"
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "timing",
          duration: 3500,
        }}
      />

      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}
