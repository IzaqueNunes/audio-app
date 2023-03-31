//@ts-nocheck
import { useEffect } from "react";

import { ScrollView, Text, View, BackHandler } from "react-native";
import { Header } from "../components/Header";

export function Home() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);
  return (
    <View className="flex w-full h-full">
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex w-full h-full"
      >
        <View className="flex w-full items-center justify-center bg-yellow-600">
          <Text className="text-red-800 font-medium bg-green-700">
            OLA MUNDO
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
