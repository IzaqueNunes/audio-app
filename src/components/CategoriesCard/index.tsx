import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoryCard() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("List")}>
      <Text>CARD</Text>
    </TouchableOpacity>
  );
}
