import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/login";
import WhatsappStatus from "../screens/whatsappStatus/whatsappStatus";
import Camera from "../screens/camera";
import PracticeMedia from "../screens/practiceMedia";

const AppStack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="PracticeMedia"
        screenOptions={{ headerShown: false }}
      >
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
