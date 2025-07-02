import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/login";
import WhatsappStatus from "../screens/whatsappStatus/whatsappStatus";

const AppStack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Login">
        <AppStack.Screen name="WhatsappStatus" component={WhatsappStatus} />
        <AppStack.Screen name="Login" component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
