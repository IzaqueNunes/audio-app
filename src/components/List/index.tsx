import React from "react";
import Play from "../../assets/play.svg";
import Clock from "../../assets/clock-gray.svg";
import { useNavigation } from "@react-navigation/native";

import { Text, View, TouchableOpacity, FlatList } from "react-native";
import { PLAYLIST } from "../../util/fakeBD";

export type ListType = {
  id: number;
  title: string;
  singer: string;
  time: string;
  sound: string;
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
            className="flex flex-row items-center h-16  px-4 border-b cursor-pointer"
            onPress={() =>
              navigation.navigate("Player", {
                id: item.id,
                title: item.title,
                singer: item.singer,
                soundUrl: item.sound,
              })
            }
          >
            <View className="flex items-center justify-center bg-purple-400 rounded-full w-10 h-10 ">
              <Play width={20} height={20} />
            </View>
            <View className="flex pl-4">
              <Text>
                {item.title} - {item.singer}
              </Text>
              <View className="flex flex-row items-center space-x-2">
                <Clock width={15} height={15} />
                <Text className="text-[#a3a3a3]">{item.time} min</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
