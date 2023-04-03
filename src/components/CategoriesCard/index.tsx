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
import {
  CARTEGORY_CARD_MEDITATION,
  CARTEGORY_CARD_POP,
} from "../../util/fakeBD";

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
    <View className="flex">
      <Text className="text-white font-medium text-lg">O melhor do Pop</Text>
      <FlatList
        horizontal={true}
        data={CARTEGORY_CARD_POP}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.navigate("List", { category: item.title })
            }
            className="w-40 h-64 rounded-md mr-4 mt-4"
          >
            <View className="flex items-center justify-center p-1 z-10">
              <Text className="text-white font-semibold">{item.title}</Text>
            </View>
            <Image
              source={item.cover}
              className="w-full h-[160px] absolute rounded-md"
            />
            <View className="flex-1 absolute">
              <Text className="text-white mt-44">{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Text className="text-white -mt-8 font-medium text-lg">
        Meditando com você
      </Text>
      <FlatList
        horizontal={true}
        data={CARTEGORY_CARD_MEDITATION}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            onPress={() =>
              navigation.navigate("List", { category: item.title })
            }
            className="w-40 h-64 rounded-md mr-4 mt-4"
          >
            <View className="flex items-center justify-center p-1 z-10">
              <Text className="text-white font-semibold">{item.title}</Text>
            </View>
            <Image
              source={item.cover}
              className="w-full h-[160px] absolute rounded-md"
            />
            <View className="flex-1 absolute">
              <Text className="text-white mt-44">{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
