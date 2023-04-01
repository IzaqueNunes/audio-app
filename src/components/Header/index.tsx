import React from "react";

import { Text, View } from "react-native";

export function Header() {
  return (
    <View className="flex items-center p-4 mt-8">
      <Text className=" text-2xl font-semibold">Bem vindo</Text>
      <Text className="text-center  mt-4">
        Escolha uma categoria para escutar suas músicas.
      </Text>
    </View>
  );
}
