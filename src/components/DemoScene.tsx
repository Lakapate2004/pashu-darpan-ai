import { ReactNode } from "react";
import { motion } from "framer-motion";

interface DemoSceneProps {
  children: ReactNode;
  className?: string;
}

export const DemoScene = ({ children, className = "" }: DemoSceneProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className={`w-full min-h-screen flex items-center justify-center p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
};
