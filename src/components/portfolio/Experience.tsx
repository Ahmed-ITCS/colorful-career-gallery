
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  color: string;
}

const experiences: JobExperience[] = [
  {
    company: "TechVision Inc.",
    role: "Senior Frontend Developer",
    period: "2021 - Present",
    description: "Leading the frontend development team in building a SaaS platform used by over 50,000 users. Implementing design systems, optimizing performance, and mentoring junior developers.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
    color: "portfolio-blue"
  },
  {
    company: "CreativeLabs",
    role: "UI/UX Developer",
    period: "2019 - 2021",
    description: "Collaborated with designers to transform concepts into responsive, interactive interfaces. Improved user engagement by 40% through UI/UX improvements and performance optimizations.",
    skills: ["React", "JavaScript", "SCSS", "Figma", "REST APIs"],
    color: "portfolio-purple"
  },
  {
    company: "WebSolutions",
    role: "Frontend Developer",
    period: "2017 - 2019",
    description: "Developed and maintained websites for clients across various industries. Implemented responsive design principles and ensured cross-browser compatibility.",
    skills: ["JavaScript", "HTML/CSS", "jQuery", "Bootstrap", "PHP"],
    color: "portfolio-pink"
  },
  {
    company: "DigitalFuture",
    role: "Junior Web Developer",
    period: "2016 - 2017",
    description: "Started my career building and customizing WordPress websites for small businesses. Learned the fundamentals of web development and client communication.",
    skills: ["WordPress", "HTML/CSS", "JavaScript", "PHP", "MySQL"],
    color: "portfolio-orange"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="section-container">
        <div className="section-heading fade-in-section">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            A timeline of my professional journey in the tech industry.
          </p>
        </div>
        
        <div className="mt-16 relative fade-in-section">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:translate-x-px"></div>
          
          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((job, index) => (
              <div 
                key={index}
                className={cn(
                  "relative flex flex-col md:flex-row md:items-center",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-gray-200 transform -translate-x-1/2 flex items-center justify-center">
                  <Briefcase className={`h-4 w-4 text-${job.color}`} />
                </div>
                
                {/* Content */}
                <div className={cn(
                  "ml-12 md:ml-0 md:w-1/2",
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                )}>
                  <div className={cn(
                    "glass-card overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                    `hover:border-${job.color}/30`
                  )}>
                    <div className={`h-1.5 w-full bg-${job.color}`}></div>
                    <div className="p-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-${job.color}/10 text-${job.color} mb-3`}>
                        {job.period}
                      </span>
                      <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                      <p className="text-gray-600 font-medium mb-4">{job.company}</p>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="px-2.5 py-0.5 text-xs rounded-md bg-gray-100 text-gray-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 flex justify-center fade-in-section">
          <a 
            href="/resume.pdf" 
            className={cn(
              "px-6 py-3 rounded-lg font-medium flex items-center gap-2",
              "bg-white border border-gray-200 text-gray-800",
              "hover:bg-gray-50 transition-all shadow-sm hover:shadow"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg 
              className="h-5 w-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m-9 0H3.375c-.621 0-1.125.504-1.125 1.125v7.5c0 .621.504 1.125 1.125 1.125h7.5c.621 0 1.125-.504 1.125-1.125v-7.5c0-.621-.504-1.125-1.125-1.125h-7.5zm13.5 0h-3.375c-.621 0-1.125.504-1.125 1.125v7.5c0 .621.504 1.125 1.125 1.125h7.5c.621 0 1.125-.504 1.125-1.125v-7.5c0-.621-.504-1.125-1.125-1.125h-7.5z"
              />
            </svg>
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
