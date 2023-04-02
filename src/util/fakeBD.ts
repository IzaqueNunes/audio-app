import { CategoryCardType } from "../components/CategoriesCard";
import { ListType } from "../components/List";

const coverImageMeditação = require("../assets/card-cover1.jpg");
const coverImagePop = require("../assets/card-pop-cover.jpg");
const coverImageVintage = require("../assets/card-vintage-cover.jpg");

const antiHeroSound = require("../sounds/Anti-Hero.mp3");
const asItWasSound = require("../sounds/As-It-Was.mp3");
const eyesClosedSound = require("../sounds/Eyes-Closed.mp3");
const flowersSound = require("../sounds/Flowers.mp3");
const heavenSound = require("../sounds/Heaven.mp3");
const iAintWorriedSound = require("../sounds/I-Aint-Worried.mp3");
const somethingInTheOrangeSound = require("../sounds/Something-In-The-Orange.mp3");
const untilIFoundYouSound = require("../sounds/Until-I-Found-You.mp3");

export const PLAYLIST: ListType[] = [
  {
    id: 1,
    title: "Anti Hero",
    singer: "Taylor Swift",
    time: "2:23",
    sound: antiHeroSound,
  },
  {
    id: 2,
    title: "As It Was",
    singer: "Harry Styles",
    time: "2:30",
    sound: asItWasSound,
  },
  {
    id: 3,
    title: "Eyes Closed",
    singer: "Ed Sheeran",
    time: "2:40",
    sound: eyesClosedSound,
  },
  {
    id: 4,
    title: "Flowers",
    singer: "Miley Cyrus",
    time: "2:20",
    sound: flowersSound,
  },
  {
    id: 5,
    title: "Heaven",
    singer: "Niall Horan",
    time: "3:23",
    sound: heavenSound,
  },
  {
    id: 6,
    title: "I Ain't Worried",
    singer: "One Repunlic",
    time: "3:21",
    sound: iAintWorriedSound,
  },
  {
    id: 7,
    title: "Something In The Orange",
    singer: "Zach Bryan",
    time: "3:00",
    sound: somethingInTheOrangeSound,
  },
  {
    id: 8,
    title: "Until I Found You",
    singer: "Stephen Sanchez ft. Em Beihold",
    time: "2:37",
    sound: untilIFoundYouSound,
  },
];

export const CARTEGORY_CARD: CategoryCardType[] = [
  {
    id: "01",
    title: "Pop",
    cover: coverImagePop,
  },
  {
    id: "02",
    title: "Meditação",
    cover: coverImageMeditação,
  },
  {
    id: "03",
    title: "Vintage",
    cover: coverImageVintage,
  },
];
