import  { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { IconContext } from "../../context/IconContext";
const MotionLink = motion.create(Link);
const AppCard = ({ item }) => {
  const Icon = item.icon;

  const { icon } = useContext(IconContext);

  return (
    <MotionLink
      to={item.link}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center justify-center"
    >
      <div
        className={`text-2xl text-active bg-surface p-2 border-1 border-border ${icon}`}
      >
        <Icon />
      </div>
      <p className="text-sm truncate font-medium">{item.name}</p>
    </MotionLink>
  );
};

export default AppCard;
