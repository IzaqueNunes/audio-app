import React from "react";

import { View, Text } from "react-native";

import ListComponent from "../components/List";
import BackArrow from "../assets/back-arrow.svg";

import { useNavigation } from "@react-navigation/native";

export default function List() {
  const navigation = useNavigation();

  return (
    <View className="flex items-center p-4 mt-8">
      <View className="flex w-full items-start justify-start">
        <BackArrow width={20} height={20} onPress={() => navigation.goBack()} />
      </View>
      <Text className="text-xl">Meditação</Text>
      <View className="mt-8">
        <ListComponent />
      </View>
    </View>
  );
}
