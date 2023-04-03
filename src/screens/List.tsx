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
    <View className="flex items-center p-4 bg-black h-full">
      <View className="flex mt-8 w-full items-start justify-start">
        <BackArrow width={20} height={20} onPress={() => navigation.goBack()} />
      </View>
      <Text className="text-2xl  text-white">{category}</Text>
      <Text className="text-lg  text-white">Playlist</Text>
      <View className="mt-8 w-full">
        <ListComponent />
      </View>
    </View>
  );
}
