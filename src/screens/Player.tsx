//@ts-nocheck

import { View, Text, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";
import { Audio, AVPlaybackStatus } from "expo-av";

import { Slider } from "@miblanchard/react-native-slider";

import { useNavigation, useRoute } from "@react-navigation/native";

import Close from "../assets/close.svg";
import Play from "../assets/play-black.svg";
import Pause from "../assets/pause-black.svg";
import Forward from "../assets/forward.svg";
import { formatTime } from "../util/formatTime";

interface Params {
  id: string;
  title: string;
  singer: string;
  soundUrl: string;
  cover: string;
  category: string;
}

export default function Player() {
  const route = useRoute();

  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [status, setStatus] = useState<AVPlaybackStatus | null>(null);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const { id, title, singer, soundUrl, cover, category } =
    route.params as Params;

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

        newSound.setOnPlaybackStatusUpdate((status) => {
          //PEGANDO STATUS ATUAL DA POSIÇÃO DO AUDIO
          if (status.isLoaded) {
            setPosition(status.positionMillis);
            if (status.positionMillis === status.durationMillis) {
              setIsPlaying(false);
            }
          }
        });
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

  const handleNewPosition = async (newPosition: number) => {
    try {
      await sound.setPositionAsync(newPosition); // define a posição atual do áudio para 10 segundos
      await sound.playAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const gettingStatusLive = async () => {};

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
    <View className="w-full h-full bg-black">
      <View className="mt-8">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="z-10 p-8"
        >
          <Close width={20} height={20} />
        </TouchableOpacity>
        <View className="flex items-center -mt-6">
          <Text className="text-xl  text-white">{category}</Text>
          <Text className="text-lg  text-white">Playlist</Text>
        </View>
        <View className="w-full items-center mt-8">
          <Image source={cover} className="w-[250px] h-[250px] rounded-2xl" />
        </View>
        <View className="flex items-start ml-8 mt-8">
          <Text className="font-semibold text-2xl text-white">{title}</Text>
          <Text className="font-semibold text-sm text-white">{singer}</Text>
        </View>
        <View className="px-8 w-full mt-4 flex ">
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={0}
            maximumValue={duration}
            value={position}
            onValueChange={(value) => setPosition(value)}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#8a8888"
            thumbTintColor="#FFFFFF"
          />
          <View className="flex flex-row justify-between">
            <Text className="text-white">{formatTime(position)}</Text>
            <Text className="text-white">{formatTime(duration)}</Text>
          </View>
          <View className=" w-full items-center mt-8">
            <View className="flex flex-row items-center space-x-8">
              <TouchableOpacity onPress={handleRewind} className="rotate-180">
                <Forward width={30} height={30} />
              </TouchableOpacity>
              <View className="p-6 rounded-full">
                <TouchableOpacity
                  onPress={playSound}
                  className="p-4 bg-white rounded-full flex"
                >
                  {isPlaying ? (
                    <Pause width={30} height={30} className="flex" />
                  ) : (
                    <Play width={30} height={30} className="flex" />
                  )}
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={handleForward}>
                <Forward width={30} height={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
