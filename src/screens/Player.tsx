//@ts-nocheck

import { View, Text, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import { Audio } from "expo-av";

import { useNavigation } from "@react-navigation/native";

import Close from "../assets/close.svg";
import Play from "../assets/play.svg";
import Pause from "../assets/pause.svg";

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const navigation = useNavigation();

  async function playSound() {
    try {
      if (sound) {
        if (isPlaying) {
          await sound.pauseAsync();
          setIsPlaying(false);
        } else {
          await sound.playAsync();
          setIsPlaying(true);
        }
      } else {
        const { sound: newSound } = await Audio.Sound.createAsync(
          require("../sounds/sound.mp3")
        );
        setSound(newSound);
        await newSound.playAsync();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View className="">
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="z-10 p-8"
        >
          <Close width={20} height={20} />
        </TouchableOpacity>

        <Image
          source={require("../assets/cover.jpg")}
          className="w-full h-screen absolute"
        />

        <View className="flex items-center">
          <Text className="font-semibold text-2xl text-white">
            Onde e como posso meditar?
          </Text>
        </View>
        <View className="w-full h-4/5 flex items-center justify-center">
          <View className="p-6 rounded-full backdrop-blur-3xl bg-white/50">
            <TouchableOpacity onPress={playSound}>
              {isPlaying ? (
                <Pause width={60} height={60} />
              ) : (
                <Play width={60} height={60} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
