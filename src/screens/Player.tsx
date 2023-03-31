import { View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function Player() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>PLAYERss</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
