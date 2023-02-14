import images from "./images";

export { default as images } from "./images";

export const navLinks = ["home", "about", "work", "contact", "skills"];

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
    tags: ["Web", "Frontend", "All"],
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
