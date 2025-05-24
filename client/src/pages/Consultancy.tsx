import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/shared/ServiceCard";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Consultancy() {
  useEffect(() => {
    document.title = "Premium Consultancy - Aetheron.AI";
  }, []);

  const services = [
    {
      icon: "fas fa-rocket",
      title: "MVP Development",
      description: "Transform your vision into a market-ready product with rapid prototyping and strategic development approaches."
    },
    {
      icon: "fas fa-brain",
      title: "AI Integration",
      description: "Implement cutting-edge artificial intelligence solutions that enhance user experiences and operational efficiency."
    },
    {
      icon: "fas fa-eye",
      title: "AR/VR Solutions",
      description: "Create immersive reality experiences that redefine how users interact with your digital products."
    },
    {
      icon: "fas fa-cogs",
      title: "System Architecture",
      description: "Design scalable, robust infrastructure that grows with your business and handles enterprise-level demands."
    },
    {
      icon: "fas fa-palette",
      title: "Product Design",
      description: "Craft intuitive user experiences and sophisticated interfaces that drive engagement and conversion."
    },
    {
      icon: "fas fa-chart-line",
      title: "Strategic Consulting",
      description: "Navigate complex technology decisions with expert guidance on market positioning and growth strategies."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery",
      description: "Deep dive into your vision, challenges, and market opportunities"
    },
    {
      number: "2",
      title: "Strategy",
      description: "Develop comprehensive roadmap and technical specifications"
    },
    {
      number: "3",
      title: "Execution",
      description: "Rapid prototyping and iterative development with regular feedback"
    },
    {
      number: "4",
      title: "Launch",
      description: "Market deployment with ongoing optimization and support"
    }
  ];

  const caseStudies = [
    {
      title: "FinTech Unicorn",
      description: "Transformed a traditional banking concept into a $1.2B valuation fintech platform with AI-powered insights.",
      growth: "+2400% Growth",
      timeline: "12 months",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    },
    {
      title: "Healthcare Revolution",
      description: "Developed breakthrough telemedicine platform that reduced patient wait times by 85% and improved outcomes.",
      growth: "500K+ Users",
      timeline: "8 months",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
    }
  ];

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
              Premium <span className="gradient-text">Consultancy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your vision into reality with our world-class strategy and product consulting. 
              We partner with industry leaders to create breakthrough innovations.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl font-space font-bold text-center mb-12">
              Our <span className="gradient-text">Process</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-16 h-16 electric-blue-bg rounded-full flex items-center justify-center text-black text-2xl font-bold mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-space font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Case Studies */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl font-space font-bold text-center mb-12">
              Success <span className="gradient-text">Stories</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  className="glassmorphism p-8 rounded-2xl glow-effect cursor-hover"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="rounded-xl mb-6 w-full h-48 object-cover" 
                  />
                  <h3 className="text-2xl font-space font-bold mb-4">{study.title}</h3>
                  <p className="text-gray-300 mb-4">{study.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="success font-semibold">{study.growth}</span>
                    <span className="electric-blue">{study.timeline}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnership Form Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="glassmorphism p-12 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-space font-light mb-6">Partner With Us</h3>
              <p className="text-lg text-white/70 mb-8 font-light leading-relaxed">
                Ready to transform your business with cutting-edge technology? Tell us about your vision and we'll craft a tailored solution.
              </p>
              <Link href="/contact" className="cursor-hover">
                <Button className="steel-accent-bg hover:bg-[hsl(var(--steel-blue-light))] text-black px-8 py-3 rounded-xl font-normal text-base transition-all duration-300 subtle-glow">
                  Start a Partnership
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
