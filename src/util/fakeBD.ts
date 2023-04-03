import { CategoryCardType } from "../components/CategoriesCard";
import { ListType } from "../components/List";

const coverImageMeditação1 = require("../assets/cover-card-meditation-1.jpg");
const coverImageMeditação2 = require("../assets/card-cover1.jpg");
const coverImageMeditação3 = require("../assets/cover-card-meditation-3.jpg");
const coverImagePop = require("../assets/cover-card-pop-1.jpg");
const coverImagePop2 = require("../assets/cover-card-pop-2.jpg");
const coverImagePop3 = require("../assets/cover-card-pop-3.jpg");

const antiHeroSound = require("../sounds/Anti-Hero.mp3");
const asItWasSound = require("../sounds/As-It-Was.mp3");
const eyesClosedSound = require("../sounds/Eyes-Closed.mp3");
const flowersSound = require("../sounds/Flowers.mp3");
const heavenSound = require("../sounds/Heaven.mp3");
const iAintWorriedSound = require("../sounds/I-Aint-Worried.mp3");
const somethingInTheOrangeSound = require("../sounds/Something-In-The-Orange.mp3");
const untilIFoundYouSound = require("../sounds/Until-I-Found-You.mp3");

const coverAntiHero = require("../assets/cover-anti-hero.jpg");
const coverAsItWas = require("../assets/as-it-was-cover.jpg");
const coverEyesClosed = require("../assets/eyes-closed-cover.jpg");
const coverFlowers = require("../assets/flowers-cover.jpg");
const coverHeaven = require("../assets/heaven-cover.png");
const coverIAintWorried = require("../assets/I-Aint-Worried-cover.jpg");
const coverSomethingInTheOrange = require("../assets/something-in-the-orange-cover.jpg");
const coverUntilIFoundYou = require("../assets/until-i-found-you-cover.jpg");

export const PLAYLIST: ListType[] = [
  {
    id: 1,
    title: "Anti Hero",
    singer: "Taylor Swift",
    time: "2:23",
    sound: antiHeroSound,
    cover: coverAntiHero,
    category: "Pop",
  },
  {
    id: 2,
    title: "As It Was",
    singer: "Harry Styles",
    time: "2:30",
    sound: asItWasSound,
    cover: coverAsItWas,
    category: "Pop",
  },
  {
    id: 3,
    title: "Eyes Closed",
    singer: "Ed Sheeran",
    time: "2:40",
    sound: eyesClosedSound,
    cover: coverEyesClosed,
    category: "Pop",
  },
  {
    id: 4,
    title: "Flowers",
    singer: "Miley Cyrus",
    time: "2:20",
    sound: flowersSound,
    cover: coverFlowers,
    category: "Pop",
  },
  {
    id: 5,
    title: "Heaven",
    singer: "Niall Horan",
    time: "3:23",
    sound: heavenSound,
    cover: coverHeaven,
    category: "Pop",
  },
  {
    id: 6,
    title: "I Ain't Worried",
    singer: "One Repunlic",
    time: "3:21",
    sound: iAintWorriedSound,
    cover: coverIAintWorried,
    category: "Pop",
  },
  {
    id: 7,
    title: "Something In The Orange",
    singer: "Zach Bryan",
    time: "3:00",
    sound: somethingInTheOrangeSound,
    cover: coverSomethingInTheOrange,
    category: "Pop",
  },
  {
    id: 8,
    title: "Until I Found You",
    singer: "Stephen Sanchez ft. Em Beihold",
    time: "2:37",
    sound: untilIFoundYouSound,
    cover: coverUntilIFoundYou,
    category: "Pop",
  },
];

export const CARTEGORY_CARD_POP: CategoryCardType[] = [
  {
    id: "01",
    title: "Pop",
    cover: coverImagePop,
  },
  {
    id: "02",
    title: "Best Vibe",
    cover: coverImagePop2,
  },
  {
    id: "03",
    title: "Workout",
    cover: coverImagePop3,
  },
];

export const CARTEGORY_CARD_MEDITATION: CategoryCardType[] = [
  {
    id: "01",
    title: "Zen",
    cover: coverImageMeditação2,
  },
  {
    id: "02",
    title: "Yoga",
    cover: coverImageMeditação3,
  },
  {
    id: "03",
    title: "Guiada",
    cover: coverImageMeditação1,
  },
];
