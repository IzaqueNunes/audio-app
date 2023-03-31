//@ts-nocheck
import { View } from "react-native";
import Lottie from "lottie-react-native";

import { useNavigation } from "@react-navigation/native";

export function Splash() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 w-full h-full items-center">
      <Lottie
        source={require("../assets/splash.json")}
        autoPlay
        loop={false}
        autoSize
        speed={0.8}
        onAnimationFinish={() => navigation.navigate("Home")}
      />
    </View>
  );
}
