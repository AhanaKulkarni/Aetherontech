import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  status: string;
  valuation: string;
  image: string;
  onClick?: () => void;
  categoryColor?: string;
}

export default function ProjectCard({
  title,
  description,
  category,
  status,
  valuation,
  image,
  onClick,
  categoryColor = "electric-blue-bg"
}: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'available now':
      case 'live':
      case 'beta testing':
        return 'success';
      case 'in development':
      case 'prototype':
        return 'electric-blue';
      case 'research phase':
        return 'text-orange-400';
      default:
        return 'electric-blue';
    }
  };

  return (
    <motion.div
      className="project-card glassmorphism rounded-2xl overflow-hidden cursor-hover"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`${categoryColor} text-black px-3 py-1 rounded-full text-sm font-semibold`}>
            {category}
          </span>
          <div className="electric-blue">
            <i className="fas fa-external-link-alt"></i>
          </div>
        </div>
        <h3 className="text-2xl font-space font-bold mb-3">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className={`${getStatusColor(status)} font-semibold`}>{status}</span>
          <span className="text-gray-400">{valuation}</span>
        </div>
      </div>
    </motion.div>
  );
}
