import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      className="glassmorphism p-10 rounded-2xl subtle-glow cursor-hover"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="steel-accent text-3xl mb-8">
        <i className={icon}></i>
      </div>
      <h3 className="text-xl font-space font-normal mb-6">{title}</h3>
      <p className="text-white/70 leading-relaxed font-light">{description}</p>
    </motion.div>
  );
}
