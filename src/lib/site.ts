export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://evgenia-kharisova.ru";

export const site = {
  name: "Евгения Харисова",
  title: "Евгения Харисова - психолог в Томске и онлайн",
  description:
    "Психолог Евгения Харисова: индивидуальные консультации, арт-терапия, схемотерапия, очно в Томске и онлайн.",
  url: siteUrl,
  locale: "ru_RU",
  image: "/images/MAT_8107.jpg",
  phone: "+79521639923",
  telegram: "https://t.me/evgenia_kharisova",
  sameAs: [
    "https://t.me/evgenia_kharisova",
    "https://vk.com/evahar",
    "https://www.instagram.com/evgeniya_kharisova16",
    "https://wa.me/+79521639923",
  ],
};
