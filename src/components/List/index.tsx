//@ts-nocheck
import React from "react";
import Play from "../../assets/play.svg";
import { useNavigation } from "@react-navigation/native";

import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { PLAYLIST } from "../../util/fakeBD";

export type ListType = {
  id: number;
  title: string;
  singer: string;
  time: string;
  sound: string;
  cover: string;
};

interface ListProps {
  data?: ListType[];
}

export default function ListComponent({ data }: ListProps) {
  const navigation = useNavigation();

  return (
    <View className="flex justify-center w-full">
      <FlatList
        data={PLAYLIST}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            className="flex flex-row items-center h-16  px-4 cursor-pointer"
            onPress={() =>
              navigation.navigate("Player", {
                id: item.id,
                title: item.title,
                singer: item.singer,
                soundUrl: item.sound,
                cover: item.cover,
              })
            }
          >
            <View className="flex flex-row flex-1">
              <View className="flex items-center justify-center bg-[#8257E5] rounded-full w-10 h-10 ">
                <Play width={20} height={20} />
              </View>
              <View className="flex pl-4">
                <Text className="font-bold  text-white">{item.title}</Text>
                <Text className="text-white">{item.singer}</Text>
              </View>
            </View>
            <View className="flex  items-end">
              <Text className="text-[#a3a3a3]">{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
