import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/login";
import WhatsappStatus from "../screens/whatsappStatus/whatsappStatus";
import Camera from "../screens/camera";
import PracticeMedia from "../screens/practiceMedia";
import AboutYou from "../screens/aboutYou";
import DesignSystemPractice from "../screens/designSystemPractice";
import LoadingPractice from "../screens/loadingPractice";
import AnimationPractice from "../screens/animationPractice";
const AppStack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="AnimationPractice"
        screenOptions={{ headerShown: false }}
      >
        <AppStack.Screen
          name="AnimationPractice"
          component={AnimationPractice}
          options={{ headerShown: false }}
        />

        <AppStack.Screen
          name="LoadingPractice"
          component={LoadingPractice}
          options={{ headerShown: false }}
        />

        <AppStack.Screen
          name="designSystemPractice"
          component={DesignSystemPractice}
        />
        <AppStack.Screen name="AboutYou" component={AboutYou} />

        <AppStack.Screen name="PracticeMedia" component={PracticeMedia} />
        <AppStack.Screen
          name="WhatsappStatus"
          component={WhatsappStatus}
          options={{ headerShown: true, title: "my app Status" }}
        />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Camera" component={Camera} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
