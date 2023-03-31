import "react-native-gesture-handler";

import { StatusBar, Text, View } from "react-native";

import { Routes } from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Routes />
    </>
  );
}
