//@ts-nocheck

import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ImageSourcePropType,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CARTEGORY_CARD } from "../../util/fakeBD";

export type CategoryCardType = {
  id: string;
  title: string;
  cover: string | ImageSourcePropType;
};

interface CardProps {
  data?: CategoryCardType[];
}

export default function CategoryCard() {
  const navigation = useNavigation();

  return (
    <FlatList
      data={CARTEGORY_CARD}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate("List", { category: item.title })}
          className="w-full mb-4 h-40 bg-gray-500 rounded-md"
        >
          <View className="bg-white w-1/3 rounded-md m-2 flex items-center justify-center p-1 z-10">
            <Text className="text-[#8257E5] font-semibold">{item.title}</Text>
          </View>
          <Image
            source={item.cover}
            className="w-full h-[160px] absolute rounded-md"
          />
        </TouchableOpacity>
      )}
    />
  );
}
