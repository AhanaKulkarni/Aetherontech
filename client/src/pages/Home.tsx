import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Spline from '@splinetool/react-spline';

export default function Home() {
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const fullText = "Welcome to Aetheron.AI";

  useEffect(() => {
    document.title = "Aetheron.AI - Project Marketplace";
    
    // Typewriter effect
    let index = 0;
    const typeWriter = setInterval(() => {
      if (index < fullText.length) {
        setCurrentText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeWriter);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="hero-ambient min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Spline 3D Robot Background */}
          <div className="spline-container">
            <Spline
              scene="https://prod.spline.design/geJZ9gfFaLE-jHnx/scene.splinecode"
              onLoad={() => setSplineLoaded(true)}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white/60 mb-4">
                {currentText}
                <span className="animate-pulse">|</span>
              </h2>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-space text-enhanced mb-8 leading-tight geometric-lines"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transform Ideas Into
              <span className="metallic-gradient block">Reality</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto font-normal leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              A curated marketplace where visionary projects meet cutting-edge technology. 
              We build the future, one breakthrough product at a time.
            </motion.p>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Link href="/projects" className="cursor-hover">
                <Button className="premium-button text-black px-8 py-3 rounded-xl font-medium text-base transition-all duration-300">
                  Explore Marketplace
                </Button>
              </Link>
              <Link href="/consultancy" className="cursor-hover">
                <Button variant="outline" className="border-[hsl(var(--electric-cyan))] text-[hsl(var(--electric-cyan))] hover:bg-[hsl(var(--electric-cyan))] hover:text-[hsl(var(--navy-blue))] px-8 py-3 rounded-xl font-medium text-base transition-all duration-300 glassmorphism">
                  Partner With Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-32 charcoal-bg bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-4xl md:text-5xl font-space font-light text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our <span className="metallic-gradient">Expertise</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: "fas fa-microchip",
                  title: "AI Integration",
                  description: "Advanced machine learning solutions that transform business operations and user experiences."
                },
                {
                  icon: "fas fa-eye",
                  title: "AR/VR Development",
                  description: "Immersive reality applications that redefine how users interact with digital environments."
                },
                {
                  icon: "fas fa-cogs",
                  title: "System Architecture",
                  description: "Scalable, robust platforms built for enterprise-grade performance and reliability."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="glassmorphism p-10 rounded-2xl subtle-glow cursor-hover text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  <div className="steel-accent text-3xl mb-8">
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="text-xl font-space font-normal mb-6">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed font-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-space font-light mb-8 leading-tight">
                  Building Tomorrow's
                  <span className="metallic-gradient block">Solutions Today</span>
                </h2>
                <p className="text-lg text-white/70 mb-10 leading-relaxed font-light">
                  Every breakthrough starts with a vision. Our marketplace connects ambitious projects 
                  with the technology and expertise needed to transform industries and shape the future.
                </p>
                <Link href="/projects" className="cursor-hover">
                  <Button className="steel-accent-bg hover:bg-[hsl(var(--steel-blue-light))] text-black px-8 py-3 rounded-xl font-normal transition-all duration-300 subtle-glow">
                    Discover Projects
                  </Button>
                </Link>
              </motion.div>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Advanced technology development" 
                  className="rounded-2xl shadow-2xl subtle-glow w-full h-auto" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
