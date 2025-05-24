import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price: string;
}

export default function ServiceCard({ icon, title, description, price }: ServiceCardProps) {
  return (
    <motion.div
      className="glassmorphism p-8 rounded-2xl glow-effect cursor-hover"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="electric-blue text-4xl mb-6">
        <i className={icon}></i>
      </div>
      <h3 className="text-2xl font-space font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <div className="electric-blue font-semibold">{price}</div>
    </motion.div>
  );
}
