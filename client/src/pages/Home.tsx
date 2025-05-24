import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Aetheron.AI - Every Problem Has a Product";
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            {/* Floating 3D Robot Placeholder */}
            <motion.div 
              className="floating mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="w-32 h-32 mx-auto glassmorphism rounded-full flex items-center justify-center glow-effect cursor-hover">
                <i className="fas fa-robot text-5xl electric-blue"></i>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-space font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Every Problem
              <span className="gradient-text block">Has a Product</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Aetheron.AI transforms visionary ideas into groundbreaking products through 
              cutting-edge artificial intelligence and innovative design.
            </motion.p>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="/projects" className="cursor-hover">
                <Button className="electric-blue-bg hover:bg-[hsl(var(--electric-blue-light))] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 glow-effect">
                  Explore Projects
                </Button>
              </Link>
              <Link href="/consultancy" className="cursor-hover">
                <Button variant="outline" className="border-[hsl(var(--electric-blue))] text-[hsl(var(--electric-blue))] hover:bg-[hsl(var(--electric-blue))] hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                  Book Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[hsl(var(--electric-blue))] opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--electric-blue))] opacity-5 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 dark-gray-bg">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
              className="text-4xl md:text-6xl font-space font-bold text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              The Future is <span className="gradient-text">Now</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "fas fa-brain",
                  title: "AI-Powered Solutions",
                  description: "Revolutionary artificial intelligence that adapts, learns, and evolves to solve complex real-world challenges."
                },
                {
                  icon: "fas fa-cube",
                  title: "3D Innovation",
                  description: "Immersive augmented reality experiences that bridge the gap between digital and physical worlds."
                },
                {
                  icon: "fas fa-rocket",
                  title: "Rapid Deployment",
                  description: "From concept to market in record time with our streamlined development and deployment pipeline."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="glassmorphism p-8 rounded-2xl glow-effect cursor-hover"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="electric-blue text-4xl mb-6">
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="text-2xl font-space font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-space font-bold mb-8">
                  Transforming <span className="gradient-text">Industries</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our marketplace connects visionary projects with cutting-edge technology, 
                  creating solutions that redefine what's possible.
                </p>
                <Link href="/projects" className="cursor-hover">
                  <Button className="electric-blue-bg hover:bg-[hsl(var(--electric-blue-light))] text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 glow-effect">
                    View All Projects
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
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Futuristic tech office workspace" 
                  className="rounded-2xl shadow-2xl glow-effect w-full h-auto" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
