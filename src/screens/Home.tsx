//@ts-nocheck

import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/Header";

export function Home() {
  return (
    <View className="flex w-full h-full">
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex w-full h-full"
      >
        <View className="flex w-full items-center justify-center bg-yellow-600">
          <Text className="text-red-800 font-medium bg-green-700">
            OLA MUNDOOOO
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
