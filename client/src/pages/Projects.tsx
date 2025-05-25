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
      title: "Furnish AR",
      description: "Revolutionary augmented reality platform that transforms interior design through real-time 3D visualization and AI-powered recommendations.",
      category: "AR/VR",
      status: "Available Now",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryType: "ar",
      categoryColor: "steel-accent-bg"
    },
    {
      id: "neural-diagnostics",
      title: "Neural Engine",
      description: "Advanced machine learning platform currently in development. Breakthrough AI technology coming soon.",
      category: "AI Health",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryType: "ai",
      categoryColor: "bg-slate-500"
    },
    {
      id: "quantum-analytics",
      title: "Quantum Analytics",
      description: "Next-generation quantum computing solutions for complex data analysis. Revolutionary technology in development.",
      category: "Quantum",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryType: "ai",
      categoryColor: "bg-slate-500"
    },
    {
      id: "autonomous-fleet",
      title: "Autonomous Systems",
      description: "Intelligent robotics platform for autonomous operations. Next-generation technology coming soon.",
      category: "Robotics",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryType: "robotics",
      categoryColor: "bg-slate-500"
    },
    {
      id: "defi-platform",
      title: "DeFi Solutions",
      description: "Advanced decentralized finance platform with AI-powered insights. Revolutionary fintech coming soon.",
      category: "FinTech",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryType: "fintech",
      categoryColor: "bg-slate-500"
    },
    {
      id: "cognitive-ai",
      title: "Cognitive Engine",
      description: "Revolutionary neural network architecture that enhances AI reasoning capabilities. Advanced technology in development.",
      category: "Deep Learning",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      categoryType: "ai",
      categoryColor: "bg-slate-500"
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
            <h1 className="text-4xl md:text-6xl font-space font-light mb-8">
              Project <span className="metallic-gradient">Marketplace</span>
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Discover breakthrough technology projects that shape tomorrow. 
              Each solution represents innovation at the intersection of vision and execution.
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
                    ? "electric-blue-bg text-white"
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
