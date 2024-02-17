import tour1 from "./slike/tour-1.jpeg";
import tour2 from "./slike/tour-2.jpeg";
import tour3 from "./slike/tour-3.jpeg";
import tour4 from "./slike/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "početna" },
  { id: 2, href: "#about", text: "o nama" },
  { id: 3, href: "#services", text: "servisi" },
  { id: 4, href: "#tours", text: "putovanja" },
];

export const socialIcons = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Sačuvajte novac",
    text: "Sačuvajte novac prilikom putovanja kako biste imali više sredstava za iskusiti raznolike aktivnosti, uživati u lokalnoj kuhinji i istražiti nezaboravne destinacije.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "nezaboravno planinarenje",
    text: "Sačuvajte novac kako biste mogli uživati u nezaboravnom planinarenju, istraživati divljinu, osvajati vrhove i stvarati nevjerojatne uspomene u prirodi.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "nevjerovatno iskustvo",
    text: "Iskoristite svoj novac za nevjerovatna iskustva koja će obogatiti vaš život i ostati urezana u vašem sjećanju zauvijek.",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "august 26, 2024",
    title: "Tibet Avantura",
    text: "Istražite Tibet - zemlju visokih planina, duhovne dubine i bogate kulture.",
    country: "kina",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    img: tour2,
    date: "oktobar 1, 2024",
    title: "najbolje od otoka Jave",
    text: "Istražite otok Javu - mjesto bogate povijesti, raznolike kulture i prekrasnih krajolika.",
    country: "Indonezija",
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    img: tour3,
    date: "septembar 15, 2024",
    title: "Istraži grad Hong Kong",
    text: " Istražite grad Hong Kong - urbani svijet koji nudi spoj istočnjačke tradicije i modernog sjaja, sažet u dinamičnoj arhitekturi, raznolikoj gastronomiji i uzbudljivim ulicama koje nikada ne spavaju. ",
    country: "Hong Kong",
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    img: tour4,
    date: "decembar 5, 2024",
    title: "Najbolje od Kenije",
    text: "Istražite Keniju - dragulj istočne Afrike koji obuhvaća prostrane savane, bujne nacionalne parkove s divljim životinjama, netaknute plaže uz obalu Indijskog oceana te bogatu kulturu i tradiciju lokalnih zajednica. Kenya pruža nezaboravno iskustvo divljine, avanture i ljepote prirode.",
    country: "Kenija",
    duration: 20,
    price: 3300,
  },
];
