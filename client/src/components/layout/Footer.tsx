import { Link } from "wouter";

export default function Footer() {
  const productLinks = [
    { href: "/project/ar-interior", label: "AR Interior" },
    { href: "/projects", label: "AI Diagnostics" },
    { href: "/projects", label: "Quantum Analytics" },
    { href: "/projects", label: "Neural Engine" },
  ];

  const serviceLinks = [
    { href: "/consultancy", label: "MVP Development" },
    { href: "/consultancy", label: "AI Integration" },
    { href: "/consultancy", label: "UI/UX Design" },
    { href: "/consultancy", label: "Strategy Consulting" },
  ];

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Careers" },
    { href: "/contact", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="dark-gray-bg border-t border-[hsl(var(--electric-blue))] border-opacity-20 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Floating Robot Footer */}
        <div className="text-center mb-12">
          <div className="floating inline-block">
            <div className="w-16 h-16 glassmorphism rounded-full flex items-center justify-center glow-effect cursor-hover">
              <i className="fas fa-robot text-2xl electric-blue"></i>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-space font-bold gradient-text mb-4">Aetheron.AI</div>
            <p className="text-gray-300 mb-6">
              Transforming problems into products through AI innovation and visionary design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 electric-blue-bg rounded-full flex items-center justify-center text-black hover:bg-[hsl(var(--electric-blue-light))] transition-colors cursor-hover">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 electric-blue-bg rounded-full flex items-center justify-center text-black hover:bg-[hsl(var(--electric-blue-light))] transition-colors cursor-hover">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="w-10 h-10 electric-blue-bg rounded-full flex items-center justify-center text-black hover:bg-[hsl(var(--electric-blue-light))] transition-colors cursor-hover">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-space font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-[hsl(var(--electric-blue))] transition-colors cursor-hover">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-space font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-[hsl(var(--electric-blue))] transition-colors cursor-hover">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-space font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:text-[hsl(var(--electric-blue))] transition-colors cursor-hover">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[hsl(var(--light-gray))] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2024 Aetheron.AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[hsl(var(--electric-blue))] transition-colors cursor-hover">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[hsl(var(--electric-blue))] transition-colors cursor-hover">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-[hsl(var(--electric-blue))] transition-colors cursor-hover">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
