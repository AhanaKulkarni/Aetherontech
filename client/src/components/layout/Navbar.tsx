import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Marketplace" },
    { path: "/consultancy", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      className="navbar-backdrop fixed top-0 left-0 right-0 z-40 py-5"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="cursor-hover">
          <div className="text-xl font-space font-light metallic-gradient">
            Aetheron.AI
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className="cursor-hover">
              <span 
                className={`nav-link text-sm ${
                  location === item.path ? 'steel-accent' : ''
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        
        <Link href="/contact" className="cursor-hover">
          <Button className="steel-accent-bg hover:bg-[hsl(var(--steel-blue-light))] text-black px-6 py-2.5 rounded-xl font-normal text-sm transition-all duration-300 subtle-glow">
            Connect
          </Button>
        </Link>
      </div>
    </motion.nav>
  );
}
