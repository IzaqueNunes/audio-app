import Play from "../../assets/play.svg";
import { Text, View } from "react-native";

export default function ListComponent() {
  return (
    <View className="flex flex-row w-full h-16 bg-gray-300 px-4">
      <View className="flex">
        <Play width={20} height={20} />
      </View>
      <View className="flex">
        <Text>Play</Text>
        <Text>Nome do audio</Text>
      </View>
    </View>
  );
}
