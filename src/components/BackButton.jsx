import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export const BackButton = ({ url }) => {
  return (
    <Link
      to={url}
      className="flex items-center bg-primary w-20 h-[35px] gap-2 px-2"
    >
      <BsArrowLeft />
      Back
    </Link>
  );
};
