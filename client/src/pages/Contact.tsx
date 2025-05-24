import { PageTransition } from "@/components/ui/page-transition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company is required"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  details: z.string().min(10, "Please provide more details about your project"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact - Aetheron.AI";
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      details: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "hello@aetheron.ai"
    },
    {
      icon: "fas fa-phone",
      title: "Phone",
      value: "+1 (555) 123-4567"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "San Francisco, CA"
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
            <h1 className="text-4xl md:text-6xl font-space font-light mb-8">
              Let's <span className="metallic-gradient">Collaborate</span>
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
              Ready to transform your vision into reality? Whether you're seeking partnership, consultation, 
              or want to discuss a revolutionary project, we're here to make it happen.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              className="glassmorphism p-8 rounded-2xl glow-effect"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-space font-light mb-8">Partnership Inquiry</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">First Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter first name" 
                              className="medium-gray-bg border-[hsl(var(--light-gray))] focus:border-[hsl(var(--electric-blue))] cursor-hover"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">Last Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter last name" 
                              className="medium-gray-bg border-[hsl(var(--light-gray))] focus:border-[hsl(var(--electric-blue))] cursor-hover"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your@email.com" 
                            className="medium-gray-bg border-[hsl(var(--light-gray))] focus:border-[hsl(var(--electric-blue))] cursor-hover"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Company</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your company name" 
                            className="medium-gray-bg border-[hsl(var(--light-gray))] focus:border-[hsl(var(--electric-blue))] cursor-hover"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="medium-gray-bg border-[hsl(var(--light-gray))] focus:border-[hsl(var(--electric-blue))] cursor-hover">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mvp">MVP Development</SelectItem>
                            <SelectItem value="ai">AI Integration</SelectItem>
                            <SelectItem value="ar">AR/VR Solution</SelectItem>
                            <SelectItem value="design">UI/UX Design</SelectItem>
                            <SelectItem value="full">Full Product Development</SelectItem>
                            <SelectItem value="consulting">Strategic Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Budget Range</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="medium-gray-bg border-[hsl(var(--light-gray))] focus:border-[hsl(var(--electric-blue))] cursor-hover">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="25-50k">$25K - $50K</SelectItem>
                            <SelectItem value="50-100k">$50K - $100K</SelectItem>
                            <SelectItem value="100-250k">$100K - $250K</SelectItem>
                            <SelectItem value="250-500k">$250K - $500K</SelectItem>
                            <SelectItem value="500k+">$500K+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Project Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={4}
                            placeholder="Tell us about your vision, challenges, and goals..." 
                            className="medium-gray-bg border-[hsl(var(--light-gray))] focus:border-[hsl(var(--electric-blue))] cursor-hover"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full steel-accent-bg hover:bg-[hsl(var(--steel-blue-light))] text-black font-normal py-3 rounded-xl transition-all duration-300 subtle-glow cursor-hover"
                  >
                    {isSubmitting ? "Sending..." : "Submit Partnership Request"}
                  </Button>
                </form>
              </Form>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <motion.div
                className="glassmorphism p-8 rounded-2xl glow-effect"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-space font-bold mb-6">Quick Connect</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 electric-blue-bg rounded-full flex items-center justify-center text-black">
                        <i className={info.icon}></i>
                      </div>
                      <div>
                        <p className="font-semibold">{info.title}</p>
                        <p className="text-gray-300">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Discovery Call */}
              <motion.div
                className="glassmorphism p-8 rounded-2xl glow-effect"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-2xl font-space font-bold mb-4">Book Discovery Call</h3>
                <p className="text-gray-300 mb-6">
                  Skip the form and talk directly with our experts. Schedule a 30-minute discovery call 
                  to discuss your project and get immediate insights.
                </p>
                <Button variant="outline" className="w-full border-[hsl(var(--electric-blue))] text-[hsl(var(--electric-blue))] hover:bg-[hsl(var(--electric-blue))] hover:text-black py-3 rounded-lg font-semibold transition-all duration-300 cursor-hover">
                  Schedule Call
                </Button>
              </motion.div>

              {/* Office Image */}
              <motion.div
                className="glassmorphism rounded-2xl overflow-hidden glow-effect"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Modern collaborative workspace" 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <h4 className="font-space font-bold text-lg mb-2">Visit Our Studio</h4>
                  <p className="text-gray-300">Experience the future of innovation at our San Francisco headquarters.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
