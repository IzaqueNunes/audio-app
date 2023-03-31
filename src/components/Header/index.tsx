import { Text, View } from "react-native";

export function Header() {
  return (
    <View className="bg-gray-800 flex items-center p-4">
      <Text className="text-white text-2xl">Áudios</Text>
      <Text className="text-center text-white mt-4">
        Fique a vontade para organizar a sequência de acordo com os seus áudios
        favoritos.
      </Text>
    </View>
  );
}
