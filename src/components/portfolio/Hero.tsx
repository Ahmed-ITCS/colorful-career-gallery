
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-portfolio-teal opacity-20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-portfolio-dark-teal opacity-20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-portfolio-cyan opacity-20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 text-center relative z-10">
        <div className="animate-slide-down">
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-800 text-gray-200 border border-gray-700 mb-6">
           Full Stack Engineer.
          </span>
        </div>
        
        <h1 className="animate-slide-down text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
          <span className="block text-gray-100">Hi, I'm </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-light-teal via-portfolio-teal to-portfolio-cyan">
            Ahmed Khawar
          </span>
        </h1>
        
        <p className="animate-slide-down text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
          I craft functional webApps and MobileApps with a focus on it's functionality and user XP.
        </p>
        
        <div className="animate-slide-down flex flex-col sm:flex-row gap-4 justify-center mb-24">
          <a 
            href="#contact" 
            className={cn(
              "px-6 py-3 rounded-lg font-medium",
              "bg-gradient-to-r from-portfolio-dark-teal to-portfolio-teal text-white",
              "hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            )}
          >
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className={cn(
              "px-6 py-3 rounded-lg font-medium",
              "bg-gray-800 text-gray-200 border border-gray-700",
              "hover:bg-gray-700 transition-all"
            )}
          >
            View Projects
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800 border border-gray-700 shadow-lg hover:shadow-xl transition-all">
          <ArrowDown className="h-5 w-5 text-gray-300" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
