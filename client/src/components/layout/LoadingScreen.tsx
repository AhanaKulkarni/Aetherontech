import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <div className="text-4xl font-space font-bold gradient-text mb-8">Aetheron.AI</div>
        <div className="w-64 h-1 dark-gray-bg rounded-full overflow-hidden">
          <div 
            className="h-full electric-blue-bg rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-[hsl(var(--light-gray))] mt-4">Initializing the future...</div>
      </div>
    </motion.div>
  );
}
