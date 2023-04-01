//@ts-nocheck
import { useEffect } from "react";

import { ScrollView, View, BackHandler } from "react-native";
import { Header } from "../components/Header";
import CategoryCard from "../components/CategoriesCard";

export function Home() {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", () => {
      return true;
    });
  }, []);
  return (
    <View className="flex w-full px-4 h-full bg-gray-200">
      <Header />
      <CategoryCard />
    </View>
  );
}
