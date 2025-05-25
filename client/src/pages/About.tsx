import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import TeamCard from "@/components/shared/TeamCard";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "Our Vision - Aetheron.AI";
  }, []);

  const values = [
    {
      icon: "fas fa-lightbulb",
      title: "Innovation First",
      description: "We push the boundaries of what's possible, always seeking breakthrough solutions that redefine industries."
    },
    {
      icon: "fas fa-users",
      title: "Human-Centric",
      description: "Technology serves humanity. Every solution we create enhances human potential and improves quality of life."
    },
    {
      icon: "fas fa-globe",
      title: "Global Impact",
      description: "We think globally and act locally, creating solutions that scale to benefit millions while remaining accessible to all."
    }
  ];

  const team = [
    {
      initials: "AP",
      name: "Ayush Pardeshi",
      role: "CEO-Director-Founder",
      description: "Former CEO of Aetheron.AI. The Visionary behind everything.."
    },
    {
      initials: "AK",
      name: "Ahana Kulkarni",
      role: "CTO & Director",
      description: " Ideated by CEO, built by her."
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-space font-bold mb-8">
              Our <span className="gradient-text">Vision</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At Aetheron.AI, we believe that every problem humanity faces has a product solution waiting to be discovered. 
              We're building the future, one breakthrough at a time.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div 
            className="grid md:grid-cols-2 gap-16 items-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h2 className="text-4xl font-space font-bold mb-8">
                The <span className="gradient-text">Origin</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Founded in 2024 by our visionary CEO, Mr. Ayush Pardeshi, alongside Director Ms. Ahana Kulkarni and a talented team of seven, 
                  Aetheron.AI was born from a bold and inspiring belief: artificial intelligence exists to amplify human creativity, not replace it.
                </p>
                <p>Our journey began during the third semester of engineering college, where we experienced firsthand the transformative power of artificial intelligence when paired with human creativity and ingenuity. 
                  What started as a shared passion among close friends has evolved into a dedicated team driven by innovation, collaboration, and a commitment to shaping the future through cutting-edge technology.
                </p>
                <p>
                  Every project we undertake is guided by our core principle: technology should solve real problems 
                  for real people, creating a future that's not just more advanced, but more human.
                </p>
              </div>
            </div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern innovative office space" 
                className="rounded-2xl shadow-2xl glow-effect w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl opacity-50"></div>
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-4xl font-space font-bold text-center mb-12">
              Our <span className="gradient-text">Values</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="glassmorphism p-8 rounded-2xl text-center glow-effect cursor-hover"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="electric-blue text-4xl mb-6">
                    <i className={value.icon}></i>
                  </div>
                  <h3 className="text-2xl font-space font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h2 className="text-4xl font-space font-bold text-center mb-12">
              The <span className="gradient-text">Visionaries</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                >
                  <TeamCard {...member} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="glassmorphism p-12 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-space font-bold mb-6">Our Mission</h3>
              <p className="text-xl text-gray-300 mb-8">
                "To democratize breakthrough technology and empower every individual, organization, and community 
                to solve their most pressing challenges through the power of artificial intelligence and innovative design."
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Link href="/projects" className="cursor-hover">
                <Button className="steel-accent-bg hover:bg-[hsl(var(--steel-blue-light))] text-black px-8 py-3 rounded-xl font-normal text-base transition-all duration-300 subtle-glow">
                  Our work
                </Button>
                </Link>
                <Link href="/contact" className="cursor-hover">
                <Button className="steel-accent-bg hover:bg-[hsl(var(--steel-blue-light))] text-black px-8 py-3 rounded-xl font-normal text-base transition-all duration-300 subtle-glow">
                  Join us
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
