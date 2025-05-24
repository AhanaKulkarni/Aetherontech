import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  status: string;
  image: string;
  onClick?: () => void;
  categoryColor?: string;
}

export default function ProjectCard({
  title,
  description,
  category,
  status,
  image,
  onClick,
  categoryColor = "steel-accent-bg"
}: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'available now':
        return 'steel-accent';
      case 'upcoming':
        return 'text-white/50';
      default:
        return 'steel-accent';
    }
  };

  return (
    <motion.div
      className="project-card glassmorphism rounded-2xl overflow-hidden cursor-hover"
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover" 
      />
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <span className={`${categoryColor} text-black px-4 py-1.5 rounded-full text-xs font-normal`}>
            {category}
          </span>
          <div className="steel-accent">
            <i className="fas fa-arrow-right text-sm"></i>
          </div>
        </div>
        <h3 className="text-xl font-space font-normal mb-4">{title}</h3>
        <p className="text-white/70 mb-6 text-sm leading-relaxed font-light">{description}</p>
        <div className="flex items-center justify-between">
          <span className={`${getStatusColor(status)} font-normal text-sm`}>{status}</span>
        </div>
      </div>
    </motion.div>
  );
}
