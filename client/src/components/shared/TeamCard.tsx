import { motion } from "framer-motion";

interface TeamCardProps {
  initials: string;
  name: string;
  role: string;
  description: string;
}

export default function TeamCard({ initials, name, role, description }: TeamCardProps) {
  return (
    <motion.div
      className="glassmorphism p-8 rounded-2xl text-center glow-effect cursor-hover"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="w-24 h-24 bg-gradient-to-br from-[hsl(var(--electric-blue))] to-[hsl(var(--electric-blue-light))] rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-black">
        {initials}
      </div>
      <h3 className="text-xl font-space font-bold mb-2">{name}</h3>
      <p className="electric-blue mb-4">{role}</p>
      <p className="text-gray-300 text-sm">{description}</p>
    </motion.div>
  );
}
