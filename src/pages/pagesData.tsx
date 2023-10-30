import { routerType } from "../types/router.types";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";

const pagesData: routerType[] = [
  {
    title: "home",
    path: "",
    element: <Home />,
  },
  {
    title: "about",
    path: "about",
    element: <About />,
  },
  {
    title: "projects",
    path: "projects",
    element: <Projects />,
  },
  {
    title: "experience",
    path: "experience",
    element: <Experience />,
  },
];

export default pagesData;
