import images from "./images";

export { default as images } from "./images";

export const navLinks = ["home", "about", "work", "skills", "contact"];

export const aboutItems = [
  {
    title: "Web Development",
    description: "I am good developer.",
    imgUrl: images.about01,
  },
  {
    title: "Web Design",
    description: "I am good web designer.",
    imgUrl: images.about02,
  },
  {
    title: "Fast Learner",
    description: "I learn fast and work hard.",
    imgUrl: images.about03,
  },
];

export const works = [
  {
    title: "GPT-3",
    codeLink: "http://",
    projectLink: "https://",
    description: " abc ",
    imgUrl: images.about01,
    tags: ["Web", "GPT-3", "Frontend", "All"],
  },
  {
    title: "Web App",
    codeLink: "http://",
    projectLink: "https://",
    description: " abc ",
    imgUrl: images.about02,
    tags: ["Web", "Backend", "All"],
  },
  {
    title: "UI/UX",
    codeLink: "http://",
    projectLink: "https://",
    description: " abc ",
    imgUrl: images.about03,
    tags: ["UI/UX", "Frontend", "All"],
  },
  {
    title: "hooBank",
    codeLink: "http://",
    projectLink: "https://",
    description: " abc ",
    imgUrl: images.about04,
    tags: ["Web", "HooBank", "Frontend", "All"],
  },
];

export const categories = ["All", "Frontend", "Backend", "UI/UX"];

export const skillsData = [
  {
    name: "react",
    bgColor: "#edf2f8",
    icon: images.react,
  },
  {
    name: "sass",
    bgColor: "#edf2f8",
    icon: images.sass,
  },
  {
    name: "redux",
    bgColor: "#edf2f8",
    icon: images.redux,
  },
  {
    name: "git",
    bgColor: "#edf2f8",
    icon: images.git,
  },
];

export const experiencesData = [
  {
    year: "2020",
    works: [
      {
        name: "Google",
        company: "google",
        desc: "frontend developer at google",
      },
      {
        name: "Yahoo",
        company: "yahoo",
        desc: "frontend developer at yahoo",
      },
    ],
  },
  {
    year: "2021",
    works: [
      {
        name: "Meta",
        company: "meta",
        desc: "Backend developer at google",
      },
    ],
  },
];

export const testimonialsData = [
  {
    name: "sara",
    company: "meta",
    imgUrl: images.react,
    feedback: "amir was great team worker. ",
  },
  {
    name: "amirReza",
    company: "google",
    imgUrl: images.api,
    feedback: "amir was amazing team worker. ",
  },
  {
    name: "seyed",
    company: "Netflix",
    imgUrl: images.cpp,
    feedback: "amir is great team worker. ",
  },
];

export const brandsData = [
  {
    name: "spotify",
    imgUrl: images.spotify,
    id: "56545",
  },
  {
    name: "bolt",
    imgUrl: images.bolt,
    id: "56576",
  },
  {
    name: "amazon",
    imgUrl: images.amazon,
    id: "56590",
  },
  {
    name: "asus",
    imgUrl: images.asus,
    id: "53445",
  },
];
