import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/shared/ProjectCard";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    document.title = "Projects - Aetheron.AI";
  }, []);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI Solutions" },
    { id: "ar", label: "AR/VR" },
    { id: "robotics", label: "Robotics" },
    { id: "fintech", label: "FinTech" },
  ];

  const projects = [
    {
      id: "ar-interior",
      title: "AR Interior Designer",
      description: "Revolutionary augmented reality app that transforms how we design and visualize interior spaces in real-time.",
      category: "AR/VR",
      status: "Available Now",
      valuation: "$2.5M Valuation",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryType: "ar",
      categoryColor: "electric-blue-bg"
    },
    {
      id: "ai-diagnostics",
      title: "Neural Diagnostics AI",
      description: "Advanced machine learning platform that revolutionizes medical diagnosis with 99.7% accuracy rates.",
      category: "AI Health",
      status: "In Development",
      valuation: "$8.2M Valuation",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryType: "ai",
      categoryColor: "bg-green-500"
    },
    {
      id: "quantum-analytics",
      title: "Quantum Analytics",
      description: "Next-generation quantum computing solutions for complex data analysis and cryptographic applications.",
      category: "Quantum",
      status: "Research Phase",
      valuation: "$15M Valuation",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryType: "ai",
      categoryColor: "bg-purple-500"
    },
    {
      id: "autonomous-fleet",
      title: "Autonomous Fleet",
      description: "Intelligent robotics platform for autonomous logistics and warehouse management systems.",
      category: "Robotics",
      status: "Beta Testing",
      valuation: "$12.8M Valuation",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryType: "robotics",
      categoryColor: "bg-orange-500"
    },
    {
      id: "defi-analytics",
      title: "DeFi Analytics Pro",
      description: "Advanced decentralized finance platform with AI-powered market prediction and risk assessment.",
      category: "FinTech",
      status: "Live",
      valuation: "$6.4M Valuation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryType: "fintech",
      categoryColor: "bg-yellow-500"
    },
    {
      id: "cognitive-engine",
      title: "Cognitive Engine",
      description: "Revolutionary neural network architecture that mimics human cognitive processes for enhanced AI reasoning.",
      category: "Deep Learning",
      status: "Prototype",
      valuation: "$22M Valuation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryType: "ai",
      categoryColor: "bg-pink-500"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.categoryType === activeFilter);

  const handleProjectClick = (projectId: string) => {
    if (projectId === "ar-interior") {
      window.location.href = "/project/ar-interior";
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-space font-bold mb-8">
              Project <span className="gradient-text">Marketplace</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover frontier technology projects that are reshaping the world. 
              Each solution represents the pinnacle of AI innovation and human ingenuity.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold cursor-hover transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "electric-blue-bg text-black"
                    : "glassmorphism hover:glow-effect"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  status={project.status}
                  valuation={project.valuation}
                  image={project.image}
                  categoryColor={project.categoryColor}
                  onClick={() => handleProjectClick(project.id)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glassmorphism p-12 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-space font-bold mb-6">Have a Project in Mind?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Join our marketplace and bring your revolutionary ideas to life with our expert team and cutting-edge technology.
              </p>
              <Link href="/contact" className="cursor-hover">
                <Button className="electric-blue-bg hover:bg-[hsl(var(--electric-blue-light))] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 glow-effect">
                  Submit Your Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
