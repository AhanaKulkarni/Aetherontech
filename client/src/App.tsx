import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ScrollIndicator from "@/components/layout/ScrollIndicator";

import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectAR from "@/pages/ProjectAR";
import Consultancy from "@/pages/Consultancy";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

import { useEffect, useState } from "react";

function Router() {
  const [location] = useLocation();

  const pageSEO = {
    "/": {
      title: "Aetheron AI - Every Problem Has a Product",
      description:
        "Transform visionary ideas into groundbreaking products through cutting-edge artificial intelligence and innovative design.",
    },
    "/projects": {
      title: "Projects - Aetheron AI",
      description: "Explore cutting-edge AI projects by Aetheron AI.",
    },
    "/project/ar-interior": {
      title: "AR Interior Project - Aetheron AI",
      description: "Discover our augmented reality interior design solutions.",
    },
    "/consultancy": {
      title: "Consultancy - Aetheron AI",
      description: "Get expert AI consultancy services at Aetheron AI.",
    },
    "/about": {
      title: "About Us - Aetheron AI",
      description: "Learn about Aetheron AI and our mission.",
    },
    "/contact": {
      title: "Contact - Aetheron AI",
      description: "Reach out to Aetheron AI for inquiries and support.",
    },
    notfound: {
      title: "Page Not Found - Aetheron AI",
      description: "The page you are looking for does not exist.",
    },
  };

  const seo = pageSEO[location as keyof typeof pageSEO] ?? pageSEO["notfound"];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://aetheronai.online${location}`} />
      </Helmet>

      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/project/ar-interior" component={ProjectAR} />
          <Route path="/consultancy" component={Consultancy} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark">
          {loading && <LoadingScreen />}
          <CustomCursor />
          <ScrollIndicator />
          <Router />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
