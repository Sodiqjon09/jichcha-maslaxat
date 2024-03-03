import quranHadislarimage from "../assets/image/koran.png";
import quranBookimage from "../assets/image/book.png";
import quranMaslahatgimage from "../assets/image/maslaxat.png";
import quranRivoyatgimage from "../assets/image/rivoyat.png";

export const departments = [
  {
    id: 1,
    name: "Hadislar",
    image: quranHadislarimage,
    link: "/page/Hadislar",
  },
  {
    id: 2,
    name: "Maslahat",
    image: quranMaslahatgimage,
    link: "/page/Maslaxat",
  },
  {
    id: 3,
    name: "Rivoyat",
    image: quranRivoyatgimage,
    link: "/page/Rivoyatlar",
  },
  { id: 4, name: "Kitoblar", image: quranBookimage, link: "/page/Kitoblar" },
];
