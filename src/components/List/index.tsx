import Play from "../../assets/play.svg";
import Clock from "../../assets/clock-gray.svg";
import { useNavigation } from "@react-navigation/native";

import { Text, View, TouchableOpacity } from "react-native";

export default function ListComponent() {
  const navigation = useNavigation();

  function openPlayer() {}

  return (
    <TouchableOpacity
      className="flex flex-row w-full h-16  px-4 border-b cursor-pointer"
      onPress={() => navigation.navigate("Player")}
    >
      <View className="flex items-center justify-center bg-purple-400 rounded-full w-10 h-10 ">
        <Play width={20} height={20} />
      </View>
      <View className="flex pl-4">
        <Text>Onde e como posso meditar?</Text>
        <View className="flex flex-row items-center space-x-2">
          <Clock width={15} height={15} />
          <Text className="text-[#a3a3a3]">1 min</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
