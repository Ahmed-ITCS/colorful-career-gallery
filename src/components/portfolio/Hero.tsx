
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-portfolio-blue opacity-10 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-portfolio-purple opacity-10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-portfolio-pink opacity-10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-center relative z-10">
        <div className="animate-slide-down">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mb-6">
            Frontend Developer & UI Designer
          </span>
        </div>
        
        <h1 className="animate-slide-down text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          <span className="block">Hi, I'm </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-pink">
            Alex Taylor
          </span>
        </h1>
        
        <p className="animate-slide-down text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
          I craft beautiful, functional websites and applications with a focus on user experience and clean code.
        </p>
        
        <div className="animate-slide-down flex flex-col sm:flex-row gap-4 justify-center mb-24">
          <a 
            href="#contact" 
            className={cn(
              "px-6 py-3 rounded-lg font-medium",
              "bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white",
              "hover:opacity-90 transition-all shadow-md hover:shadow-lg"
            )}
          >
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className={cn(
              "px-6 py-3 rounded-lg font-medium",
              "bg-gray-100 text-gray-800",
              "hover:bg-gray-200 transition-all"
            )}
          >
            View Projects
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:shadow-lg transition-all">
          <ArrowDown className="h-5 w-5 text-gray-600" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
