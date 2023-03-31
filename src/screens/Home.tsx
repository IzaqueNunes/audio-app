//@ts-nocheck
import { useEffect } from "react";

import { ScrollView, Text, View, BackHandler } from "react-native";
import { Header } from "../components/Header";
import List from "../components/List";

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
        <View className="flex w-full items-center justify-center pt-4">
          <List />
        </View>
      </ScrollView>
    </View>
  );
}
