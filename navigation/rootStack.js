import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../screens/LandingScreen";
import LogIn from "../screens/LogIn";
import CreateAccountScreen from "../screens/CreateAccountScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LogIn}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Createaccount"
        component={CreateAccountScreen}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}
