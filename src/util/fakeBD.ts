import { CategoryCardType } from "../components/CategoriesCard";
import { ListType } from "../components/List";

const coverImageMeditação = require("../assets/card-cover1.jpg");
const coverImagePop = require("../assets/card-pop-cover.jpg");
const coverImageVintage = require("../assets/card-vintage-cover.jpg");

export const PLAYLIST: ListType[] = [
  {
    id: "01",
    title: "Eyes Closed",
  },
  {
    id: "02",
    title: "Shippuden",
  },
  {
    id: "03",
    title: "Rising Dragon",
  },
  {
    id: "04",
    title: "Risking it all",
  },
  {
    id: "05",
    title: "Gekiha",
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
