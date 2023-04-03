import React from "react";

import { Text, View } from "react-native";

export function Header() {
  return (
    <View className="flex items-center p-4 mt-8">
      <Text className=" text-4xl font-extrabold text-white">Bem vindo</Text>
      <Text className="text-center  mt-4  font-semibold text-white">
        Escolha uma categoria para escutar suas músicas.
      </Text>
    </View>
  );
}
