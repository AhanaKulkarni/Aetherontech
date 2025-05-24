import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // Fade in animations for glassmorphism elements
  gsap.utils.toArray('.glassmorphism').forEach((element: any) => {
    gsap.fromTo(element, 
      { 
        opacity: 0, 
        y: 30,
        scale: 0.9
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Stagger animations for grid elements
  gsap.utils.toArray('.grid').forEach((grid: any) => {
    const children = grid.children;
    gsap.fromTo(children,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: grid,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Parallax effect for background elements
  gsap.utils.toArray('.hero-gradient').forEach((element: any) => {
    gsap.to(element, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  // Glow effect animations
  gsap.utils.toArray('.glow-effect').forEach((element: any) => {
    const tl = gsap.timeline({ paused: true });
    
    tl.to(element, {
      boxShadow: "0 0 40px rgba(29, 140, 248, 0.6)",
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    });

    element.addEventListener('mouseenter', () => tl.play());
    element.addEventListener('mouseleave', () => tl.reverse());
  });
};

export const animatePageTransition = () => {
  const tl = gsap.timeline();
  
  tl.fromTo('body', 
    { opacity: 0 },
    { opacity: 1, duration: 0.5, ease: "power2.out" }
  );
  
  return tl;
};

export const animateHeroElements = () => {
  const tl = gsap.timeline();
  
  tl.fromTo('.hero-gradient h1',
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
  )
  .fromTo('.hero-gradient p',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    "-=0.5"
  )
  .fromTo('.hero-gradient .floating',
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
    "-=1"
  );
  
  return tl;
};
