
import { cn } from "@/lib/utils";

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
  color: string;
}

const skillsData: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 }
    ],
    color: "portfolio-blue"
  },
  {
    name: "Design & UI/UX",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    skills: [
      { name: "Figma", level: 88 },
      { name: "Adobe XD", level: 85 },
      { name: "Responsive Design", level: 95 },
      { name: "Wireframing", level: 90 },
      { name: "Prototyping", level: 85 },
      { name: "UI Animation", level: 80 }
    ],
    color: "portfolio-purple"
  },
  {
    name: "Backend & Tools",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "RESTful APIs", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "Firebase", level: 80 },
      { name: "Webpack", level: 75 }
    ],
    color: "portfolio-teal"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="section-heading fade-in-section">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 fade-in-section">
          {skillsData.map((category, index) => (
            <div key={index} className="glass-card overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className={`h-1 w-full bg-${category.color}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-${category.color}/10 text-${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%`, transitionDelay: `${i * 100}ms` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-8 fade-in-section">
          <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript", "TypeScript", "HTML", "CSS/SCSS", "SQL", "Python", "PHP"
              ].map((lang, i) => (
                <span 
                  key={i}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-sm",
                    "bg-white border border-gray-200 shadow-sm"
                  )}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-6 hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "VS Code", "Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify", "NPM", "Jira", "Slack"
              ].map((tool, i) => (
                <span 
                  key={i}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-sm",
                    "bg-white border border-gray-200 shadow-sm"
                  )}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
