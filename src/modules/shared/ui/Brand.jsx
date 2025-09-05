import { motion } from "motion/react";
import { useNavigate } from "react-router";
import BrandImage from "./BrandImage.png";

const Brand = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-center gap-2">
      <img src={BrandImage} alt="PropBot Estate" className="h-6 w-auto ml-2" />
      <motion.button
        onClick={() => navigate("/")}
        className="text-xl font-bold"
        animate={{
          color: ["#ff5733", "#33ff33", "#8a33ff", "#ce9733"],
          transition: { duration: 9, repeat: Infinity },
        }}
      >
        PropBot
      </motion.button>
    </div>
  );
};

export default Brand;
