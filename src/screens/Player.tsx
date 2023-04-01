//@ts-nocheck

import { View, Text, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import { Audio, AVPlaybackStatus } from "expo-av";

import { Slider } from "@miblanchard/react-native-slider";

import { useNavigation } from "@react-navigation/native";

import Close from "../assets/close.svg";
import Play from "../assets/play.svg";
import Pause from "../assets/pause.svg";

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);
  /* const [position, setPosition] = useState(0); */

  state = {
    value: 0.2,
  };

  const navigation = useNavigation();

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded && !status.isBuffering) {
      setStatus(status);
      setPosition(status.positionMillis);
    }
  };

  const onSliderValueChange = async (value: number) => {
    if (sound) {
      await sound.setPositionAsync(value);
      setPosition(value);
    }
  };

  const getPositionString = () => {
    if (status) {
      const position = status.positionMillis;
      const minutes = Math.floor(position / 60000);
      const seconds = ((position % 60000) / 1000).toFixed(0).padStart(2, "0");
      return `${minutes}:${seconds}`;
    }
    return "";
  };

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

  let TIME15 = 15 * 1000; //15 SECONDS
  let TIME30 = 30 * 1000; //30 SECONDS

  const handleForward = async () => {
    try {
      if (sound) {
        const position = await sound.getPositionAsync();
        await sound.setPositionAsync(position + TIME15);
      }
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
          source={require("../assets/cover.jpg")}
          className="w-full h-[850px] absolute"
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
          <View className="px-8 w-full mt-32 flex ">
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={0}
              maximumValue={status?.positionMillis || 0}
              minimumTrackTintColor="#ffffff"
              maximumTrackTintColor="#000000"
              thumbTintColor="#ffffff"
            />
            <View className="flex flex-row justify-between">
              <Text className="text-white">00:00</Text>
              <Text className="text-white">00:00</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
