import { useEffect } from "react";
import { initScrollAnimations } from "@/lib/animations";

export const useGSAP = () => {
  useEffect(() => {
    // Initialize GSAP animations after component mount
    const timer = setTimeout(() => {
      initScrollAnimations();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);
};
