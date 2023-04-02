import React from "react";

import { View, Text } from "react-native";

import ListComponent from "../components/List";
import BackArrow from "../assets/back-arrow.svg";

import { useNavigation, useRoute } from "@react-navigation/native";

interface Params {
  category: string;
}

export default function List() {
  const route = useRoute();
  const navigation = useNavigation();

  const { category } = route.params as Params;

  return (
    <View className="flex items-center p-4 mt-8">
      <View className="flex w-full items-start justify-start">
        <BackArrow width={20} height={20} onPress={() => navigation.goBack()} />
      </View>
      <Text className="text-xl">{category}</Text>
      <View className="mt-8 w-full">
        <ListComponent />
      </View>
    </View>
  );
}
