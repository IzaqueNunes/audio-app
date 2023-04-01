import { CategoryCardType } from "../components/CategoriesCard";
import { ListType } from "../components/List";

const coverImage = require("../assets/card-cover1.jpg");
const coverImage1 = require("../assets/card-cover.jpg");

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
    cover: coverImage,
  },
  {
    id: "02",
    title: "Pop",
    cover: coverImage,
  },
  {
    id: "03",
    title: "Pop",
    cover: coverImage,
  },
];
