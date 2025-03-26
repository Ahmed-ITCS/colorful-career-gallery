
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <div className="section-heading fade-in-section">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A brief introduction about who I am and what I do.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center fade-in-section">
          <div className="relative">
            <div className={cn(
              "w-full aspect-square rounded-2xl overflow-hidden",
              "border-4 border-white shadow-xl",
              "transform rotate-3 hover:rotate-0 transition-all duration-500",
            )}>
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/20 to-portfolio-purple/20"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                alt="Alex Taylor" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-portfolio-blue rounded-full opacity-20 filter blur-xl"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-portfolio-purple rounded-full opacity-20 filter blur-xl"></div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-2xl font-bold">Who am I?</h3>
              <p className="text-lg text-gray-600">
                I'm a passionate frontend developer and UI designer with 5+ years of experience 
                crafting digital experiences that users love. Based in San Francisco, I combine 
                technical skills with an eye for design to create beautiful and functional websites 
                and applications.
              </p>
            </div>
            
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-2xl font-bold">My Approach</h3>
              <p className="text-lg text-gray-600">
                I believe that great digital products are born at the intersection of technical 
                excellence, beautiful design, and user empathy. My workflow involves close collaboration 
                with clients and teams to ensure the final product exceeds expectations.
              </p>
            </div>
            
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-2xl font-bold">Beyond Work</h3>
              <p className="text-lg text-gray-600">
                When I'm not coding, you'll find me hiking in the mountains, experimenting with 
                photography, or exploring new coffee shops. I'm also an avid reader and enjoy 
                attending tech meetups and conferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
