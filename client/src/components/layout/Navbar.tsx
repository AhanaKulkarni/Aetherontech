import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/consultancy", label: "Consultancy" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      className="navbar-glow fixed top-0 left-0 right-0 z-40 py-6"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="cursor-hover">
          <div className="text-2xl font-space font-bold gradient-text">
            Aetheron.AI
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className="cursor-hover">
              <span 
                className={`nav-link ${
                  location === item.path ? 'electric-blue' : ''
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        
        <Link href="/contact" className="cursor-hover">
          <Button className="electric-blue-bg hover:bg-[hsl(var(--electric-blue-light))] text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 glow-effect">
            Get Started
          </Button>
        </Link>
      </div>
    </motion.nav>
  );
}
