import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { socialType } from "../../types/social.types";

const socialData: socialType[] = [
  {
    title: "linkedIn",
    path: "https://www.linkedin.com/in/darshan-lakade/",
    element: <FaLinkedin />,
  },
  {
    title: "github",
    path: "https://github.com/darshancsl",
    element: <FaGithub />,
  },
  {
    title: "gmail",
    path: "mailto:darshan.lakade157@gmail.com",
    element: <FaEnvelope />,
  },
];

export default socialData;
