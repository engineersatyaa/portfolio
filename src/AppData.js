import {
  Work,
  Language,
  ListAlt,
  Twitter,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

// Slidebar Data

const slidbarData = [
  {
    id: 1,
    icon: <Work />,
    title: "Portfolio Website",
    des: "Portfolio Website made with React JS, SASS & Material UI Icons.",
    img: "images/laptop.jpg",
    link: "#",
  },
  {
    id: 2,
    icon: <ListAlt />,
    title: "Todo Application",
    des: "Todo App made with React JS & CSS.",
    img: "images/todolist.jpg",
    link: "https://github.com/engineersatyaa/todo-app",
  },
  {
    id: 3,
    icon: <Language />,
    title: "E-Com Website",
    des: "Website will be added soon...",
    img: "images/ecom.jpg",
    link: "#",
  },
];

// Portfolio Data

const featuredPortfolio = [
  { id: 1, title: "Portfolio Website", img: "images/laptop.jpg" },
  { id: 2, title: "Todo App", img: "images/todolist.jpg" },
  { id: 3, title: "E-Commerce Website", img: "images/ecom.jpg" },
  { id: 4, title: "Weather App", img: "images/weather.jpg" },
  { id: 5, title: "Social Media App", img: "images/social-media.jpg" },
  { id: 6, title: "Trading App", img: "images/trading.jpg" },
  { id: 7, title: "Website", img: "images/laptop.jpg" },
  { id: 8, title: "Live Chat App", img: "images/social-media.jpg" },
];

const webPortfolio = [
  { id: 1, title: "Weather App", img: "images/weather.jpg" },
  { id: 2, title: "Portfolio Website", img: "images/laptop.jpg" },
  { id: 3, title: "E-Commerce Website", img: "images/ecom.jpg" },
  { id: 4, title: "Social Media App", img: "images/social-media.jpg" },
  { id: 5, title: "Todo App", img: "images/todolist.jpg" },
  { id: 6, title: "Trading App", img: "images/trading.jpg" },
];

const mobilePortfolio = [
  { id: 1, title: "Todo App", img: "images/todolist.jpg" },
  { id: 2, title: "Weather App", img: "images/weather.jpg" },
  { id: 3, title: "E-Commerce Website", img: "images/ecom.jpg" },
  { id: 4, title: "Trading App", img: "images/trading.jpg" },
  { id: 5, title: "Social Media App", img: "images/social-media.jpg" },
];
const designPortfolio = [
  { id: 1, title: "Weather App", img: "images/weather.jpg" },
  { id: 2, title: "Portfolio Website", img: "images/laptop.jpg" },
  { id: 3, title: "E-Commerce Website", img: "images/ecom.jpg" },
  { id: 4, title: "Todo App", img: "images/todolist.jpg" },
];
const contentPortfolio = [
  { id: 1, title: "Social Media App", img: "images/social-media.jpg" },
  { id: 2, title: "Website", img: "images/laptop.jpg" },
  { id: 3, title: "Todo App", img: "images/todolist.jpg" },
  { id: 4, title: "E-Commerce Website", img: "images/ecom.jpg" },
  { id: 5, title: "Weather App", img: "images/weather.jpg" },
  { id: 6, title: "Live Chat App", img: "images/social-media.jpg" },
  { id: 7, title: "Trading App", img: "images/trading.jpg" },
  { id: 8, title: "Portfolio Website", img: "images/laptop.jpg" },
];

// Portfolio Horizontal List Data

const list = [
  { id: "featured", title: "Featured" },
  { id: "web", title: "Web App" },
  { id: "mobile", title: "Mobile App" },
  { id: "content", title: "Content" },
];

// Testimonials Data

const testimonialData = [
  {
    id: 1,
    name: "Tony Stark",
    title: "Owner STARK Ind.",
    icon: (
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <Twitter className="Twitter-icon" />
      </a>
    ),
    img: "images/tony.jpg",
    desc: "Lorem ipsum  Facere tenetur libero eligendi quas  quasi. dolor, sit amet consectetur adipisicing elit. Facere tenetur libero eligendi quas perferendis quasi.",
  },
  {
    id: 2,
    name: "S.P. Singh",
    title: "Director of SHIELD",
    icon: (
      <a
        href="https://www.linkedin.com/company/login/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn className="LinkedIn-icon" />
      </a>
    ),

    img: "images/sam2.jpg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere tenetur libero eligendi quas perferendis quasi. Facere tenetur libero eligendi quas perferendis quasi.",
    featured: true,
  },
  {
    id: 3,
    name: "Cap.America",
    title: "The First Avenger",
    icon: (
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <YouTube className="YouTube-icon" />
      </a>
    ),
    img: "images/captain.jpg",
    desc: "Lorem ipsum  Facere tenetur libero eligendi quas  quasi. dolor, sit amet consectetur adipisicing elit. Facere tenetur libero eligendi quas perferendis quasi.",
  },
];

// Contact Profile Data

const contactData = [
  {
    id: 1,
    link: "https://github.com/engineersatyaa",
    src: "images/github1.png",
    alt: "GitHub",
    title: "Visit My GitHub Profile",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/satya-pal-singh-a51309250/",
    src: "images/linkedin.png",
    alt: "LinkedIn",
    title: "Visit My LinkedIn Profile",
  },
  {
    id: 3,
    link: "https://www.naukri.com/mnjuser/profile?id=&orgn=homepage",
    src: "images/naukri.png",
    alt: "Naukri",
    title: "Visit My Naukri Profile",
  },
];

export {
  contactData,
  slidbarData,
  testimonialData,
  list,
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
};
