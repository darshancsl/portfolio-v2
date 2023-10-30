import socialData from "./socialData";
import { Link } from "react-router-dom";
import { socialType } from "../../types/social.types";

const SocialRouter = () => {
  const socialRoutes = socialData.map(
    ({ path, title, element }: socialType) => {
      return (
        <li className='mx-1 fs-4' key={title}>
          <Link target='_blank' to={`${path}`}>
            {element}
          </Link>
        </li>
      );
    }
  );
  return <ul className='d-flex'>{socialRoutes}</ul>;
};

export default SocialRouter;
