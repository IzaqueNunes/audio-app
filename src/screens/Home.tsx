//@ts-nocheck
import { useEffect } from "react";

import { ScrollView, View, BackHandler } from "react-native";
import { Header } from "../components/Header";
import List from "../components/List";
import CategoryCard from "../components/CategoriesCard";

export function Home() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);
  return (
    <View className="flex w-full h-full bg-gray-200">
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex w-full h-full"
      >
        <View className="flex w-full items-center justify-center pt-4">
          <CategoryCard />
        </View>
      </ScrollView>
    </View>
  );
}
