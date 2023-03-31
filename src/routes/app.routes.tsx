import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { Splash } from "../screens/Splash";
import Player from "../screens/Player";
import List from "../screens/List";

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Player" component={Player} />
    </Stack.Navigator>
  );
}
