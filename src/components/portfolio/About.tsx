
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gray-800">
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
              "border-4 border-gray-700 shadow-xl",
              "transform rotate-3 hover:rotate-0 transition-all duration-500",
            )}>
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-teal/20 to-portfolio-dark-teal/20"></div>
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D35AQHW3C4AMMBKfg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1725478306041?e=1743598800&v=beta&t=DJG39AKP_5w0cVJSOXcFD5qX4xL3t0OY076HieMShuE"
                alt="Ahmed Khawar" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-portfolio-teal rounded-full opacity-30 filter blur-xl"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-portfolio-dark-teal rounded-full opacity-30 filter blur-xl"></div>
          </div>
          
          <div className="space-y-6">
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-100">Who am I?</h3>
              <p className="text-lg text-gray-300">
              I am a Software Engineer with a Bachelor's degree in Software Engineering and practical experience in developing
and implementing technical solutions. I'm looking to use my skills in problem-solving, programming, and system
design to add value to a forward-thinking organization. I'm passionate about leveraging technology to solve complex
challenges and drive impactful results. I'm eager to grow, learn, and contribute meaningfully in a dynamic and
innovative environment.
              </p>
            </div>
            
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-100">My Approach</h3>
              <p className="text-lg text-gray-300">
                I believe that great systems are built at the intersection of technical 
                excellence, and well thought out system. My workflow involves close collaboration 
                with clients and teams to ensure the final deliverable exceeds expectations.
              </p>
            </div>
            
            <div className="glass-card p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-100">Beyond Work</h3>
              <p className="text-lg text-gray-300">
                When I'm not coding, you'll find me watching movies and TV-series, working at the Gym, or exploring new coffee shops. I'm also an avid reader and enjoy 
                hanging out with friends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
