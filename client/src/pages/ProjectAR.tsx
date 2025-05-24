import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ProjectAR() {
  useEffect(() => {
    document.title = "AR Interior Designer - Aetheron.AI";
  }, []);

  const features = [
    {
      icon: "fas fa-eye",
      title: "Real-Time Visualization",
      description: "See furniture and decor in your actual space through advanced AR technology with photorealistic rendering."
    },
    {
      icon: "fas fa-brain",
      title: "AI Recommendations",
      description: "Smart suggestions based on your style preferences, room dimensions, and lighting conditions."
    },
    {
      icon: "fas fa-shopping-cart",
      title: "Seamless Shopping",
      description: "Direct integration with major furniture retailers for instant purchasing and delivery scheduling."
    },
    {
      icon: "fas fa-users",
      title: "Collaboration Tools",
      description: "Share designs with family, friends, or professional designers for real-time feedback and collaboration."
    },
    {
      icon: "fas fa-ruler",
      title: "Precise Measurements",
      description: "Advanced spatial mapping ensures perfect fit and scale for every piece of furniture and decoration."
    },
    {
      icon: "fas fa-lightbulb",
      title: "Lighting Simulation",
      description: "Realistic lighting effects that change based on time of day and natural light conditions."
    }
  ];

  const techSpecs = [
    {
      icon: "fas fa-mobile-alt",
      title: "Cross-Platform AR",
      description: "iOS, Android, and Web AR support"
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Processing",
      description: "Scalable ML inference and 3D rendering"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Privacy First",
      description: "On-device processing with encrypted data"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Project Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <Link href="/projects" className="electric-blue hover:text-[hsl(var(--electric-blue-light))] cursor-hover">
                <i className="fas fa-arrow-left text-xl"></i>
              </Link>
              <span className="electric-blue-bg text-black px-4 py-2 rounded-full text-sm font-semibold">AR/VR Project</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-space font-bold mb-8">
              AR Interior <span className="gradient-text">Designer</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary augmented reality application that transforms interior design through real-time 3D visualization, 
              AI-powered recommendations, and seamless integration with furniture catalogs.
            </p>
          </motion.div>

          {/* Project Demo */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative glassmorphism rounded-2xl overflow-hidden glow-effect">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
                alt="AR Interior Designer demo interface" 
                className="w-full h-96 object-cover" 
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <button className="electric-blue-bg hover:bg-[hsl(var(--electric-blue-light))] p-6 rounded-full text-3xl transition-all duration-300 glow-effect cursor-hover text-black">
                  <i className="fas fa-play"></i>
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glassmorphism p-4 rounded-lg">
                  <h3 className="font-space font-bold text-lg mb-2">Interactive Demo Available</h3>
                  <p className="text-gray-300">Experience the future of interior design in real-time</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glassmorphism p-8 rounded-2xl glow-effect cursor-hover"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="electric-blue text-4xl mb-6">
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-2xl font-space font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Technical Specifications */}
          <motion.div 
            className="grid md:grid-cols-2 gap-16 items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <h2 className="text-4xl font-space font-bold mb-8">
                Technical <span className="gradient-text">Excellence</span>
              </h2>
              <div className="space-y-6">
                {techSpecs.map((spec, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 electric-blue-bg rounded-full flex items-center justify-center text-black">
                      <i className={spec.icon}></i>
                    </div>
                    <div>
                      <h4 className="font-space font-bold">{spec.title}</h4>
                      <p className="text-gray-300">{spec.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="AR technology development" 
                className="rounded-2xl shadow-2xl glow-effect w-full h-auto" 
              />
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="glassmorphism p-12 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-space font-bold mb-6">Ready to Transform Your Space?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Experience the future of interior design today with our revolutionary AR platform.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Button className="electric-blue-bg hover:bg-[hsl(var(--electric-blue-light))] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 glow-effect cursor-hover">
                  Try Demo
                </Button>
                <Link href="/contact" className="cursor-hover">
                  <Button variant="outline" className="border-[hsl(var(--electric-blue))] text-[hsl(var(--electric-blue))] hover:bg-[hsl(var(--electric-blue))] hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                    Request Partnership
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
