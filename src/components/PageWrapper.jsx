import { motion } from "framer-motion";

const fadeSlide = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
};

const heroPortal = {
  initial: { opacity: 0, scale: 0.9, rotateX: -10 },
  animate: { opacity: 1, scale: 1, rotateX: 0 },
  exit: { opacity: 0, scale: 0.85, rotateX: 5 },
};

const PageWrapper = ({ children, fromLanding }) => {
  const variants = fromLanding ? heroPortal : fadeSlide;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
