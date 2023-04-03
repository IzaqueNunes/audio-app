//@ts-nocheck

import { View, Text, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import { Audio, AVPlaybackStatus } from "expo-av";

import { Slider } from "@miblanchard/react-native-slider";

import { useNavigation, useRoute } from "@react-navigation/native";

import Close from "../assets/close.svg";
import Play from "../assets/play.svg";
import Pause from "../assets/pause.svg";
import Forward from "../assets/forward.svg";
import { formatTime } from "../util/formatTime";

interface Params {
  id: string;
  title: string;
  singer: string;
  soundUrl: string;
}

export default function Player() {
  const route = useRoute();

  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const { id, title, singer, soundUrl } = route.params as Params;

  state = {
    value: 0.2,
  };

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
        const { sound: newSound } = await Audio.Sound.createAsync(soundUrl);
        setSound(newSound);
        await newSound.playAsync();
        setIsPlaying(true);
        const status = await newSound.getStatusAsync();
        const durationMillis = status.durationMillis;
        setDuration(durationMillis);
      }
    } catch (error) {
      console.log(error);
    }
  }

  let TIME15 = 15 * 1000; //15 SECONDS
  let TIME30 = 30 * 1000; //30 SECONDS

  const handleForward = async () => {
    try {
      const status = await sound.getStatusAsync();
      const positionMillis = status.positionMillis;
      setPosition(positionMillis);
      await sound.setPositionAsync(positionMillis + TIME30); // define a posição atual do áudio para 10 segundos
      await sound.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const handleRewind = async () => {
    try {
      const status = await sound.getStatusAsync();
      const positionMillis = status.positionMillis;
      setPosition(positionMillis);
      await sound.setPositionAsync(positionMillis - TIME15); // define a posição atual do áudio para 10 segundos
      await sound.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View className="w-full h-full ">
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="z-10 p-8"
        >
          <Close width={20} height={20} />
        </TouchableOpacity>

        <Image
          source={require("../assets/cover1.jpg")}
          className="w-full h-[850px] absolute"
        />

        <View className="flex items-center">
          <Text className="font-semibold text-2xl text-white">{title}</Text>
          <Text className="font-semibold text-base text-white">{singer}</Text>
        </View>
        <View className="w-full h-4/5 flex items-center justify-center">
          <View className="flex flex-row items-center space-x-8">
            <TouchableOpacity onPress={handleRewind} className="rotate-180">
              <Forward width={60} height={60} />
            </TouchableOpacity>
            <View className="p-6 rounded-full backdrop-blur-3xl bg-white/50">
              <TouchableOpacity onPress={playSound}>
                {isPlaying ? (
                  <Pause width={60} height={60} />
                ) : (
                  <Play width={60} height={60} />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleForward}>
              <Forward width={60} height={60} />
            </TouchableOpacity>
          </View>
          <View className="px-8 w-full mt-32 flex ">
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={0}
              maximumValue={duration}
              value={position}
            />
            <View className="flex flex-row justify-between">
              <Text className="text-white">{formatTime(position)}</Text>
              <Text className="text-white">{formatTime(duration)}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
