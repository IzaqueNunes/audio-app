import { CategoryCardType } from "../components/CategoriesCard";
import { ListType } from "../components/List";

const coverImageMeditação = require("../assets/card-cover1.jpg");
const coverImagePop = require("../assets/card-pop-cover.jpg");
const coverImageVintage = require("../assets/card-vintage-cover.jpg");

export const PLAYLIST: ListType[] = [
  {
    id: "01",
    title: "Eyes Closed",
    singer: "Ed Sheeran",
  },
  {
    id: "02",
    title: "Shippuden",
    singer: "Ed Sheeran",
  },
  {
    id: "03",
    title: "Rising Dragon",
    singer: "Ed Sheeran",
  },
  {
    id: "04",
    title: "Risking it all",
    singer: "Ed Sheeran",
  },
  {
    id: "05",
    title: "Gekiha",
    singer: "Ed Sheeran",
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
