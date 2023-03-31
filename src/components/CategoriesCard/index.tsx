import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoryCard() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("List")}
      className="w-full mb-4 h-40 bg-gray-500 rounded-md"
    >
      <View className="bg-white w-1/2 rounded-md m-2 flex items-center justify-center p-1 z-10">
        <Text className="text-blue-600 font-semibold">Meditação</Text>
      </View>
      <Image
        source={require("../../assets/card-cover.jpg")}
        className="w-full h-[160px] absolute rounded-md"
      />
    </TouchableOpacity>
  );
}
