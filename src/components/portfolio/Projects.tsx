
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  featured: boolean;
  category: "web" | "mobile" | "design";
}

const projectsData: Project[] = [
  {
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard for online stores with analytics, inventory management, and order processing features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    link: "#project-1",
    featured: true,
    category: "web"
  },
  {
    title: "Fitness App UI",
    description: "A modern mobile app interface for fitness tracking, workout planning, and health monitoring.",
    image: "https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    tags: ["Figma", "UI/UX Design", "Prototyping"],
    link: "#project-2",
    featured: true,
    category: "design"
  },
  {
    title: "Task Management Platform",
    description: "A collaborative platform for teams to manage tasks, track progress, and streamline workflows.",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    link: "#project-3",
    featured: true,
    category: "web"
  },
  {
    title: "Travel Companion App",
    description: "A mobile application for travelers to discover destinations, plan itineraries, and share experiences.",
    image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    tags: ["React Native", "Firebase", "Google Maps API"],
    link: "#project-4",
    featured: false,
    category: "mobile"
  },
  {
    title: "Financial Dashboard",
    description: "An intuitive dashboard for personal finance management with expense tracking and budget planning tools.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    tags: ["Vue.js", "D3.js", "Firebase"],
    link: "#project-5",
    featured: false,
    category: "web"
  },
  {
    title: "Recipe Finder App",
    description: "A mobile app to discover recipes based on available ingredients, dietary preferences, and cooking time.",
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80",
    tags: ["Flutter", "Dart", "REST API"],
    link: "#project-6",
    featured: false,
    category: "mobile"
  }
];

type CategoryFilter = "all" | "web" | "mobile" | "design";

const Projects = () => {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  
  const filteredProjects = projectsData.filter(project => 
    filter === "all" || project.category === filter
  );
  
  const filterOptions: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "web", label: "Web Applications" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "design", label: "UI/UX Design" }
  ];
  
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="section-container">
        <div className="section-heading fade-in-section">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my best work and personal projects.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 fade-in-section">
          <div className="inline-flex rounded-md p-1 bg-gray-100">
            {filterOptions.map(option => (
              <button
                key={option.value}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  filter === option.value 
                    ? "bg-white shadow-sm text-gray-900" 
                    : "text-gray-600 hover:text-gray-900"
                )}
                onClick={() => setFilter(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-in-section">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card overflow-hidden transition-all duration-300",
                "hover:shadow-xl hover:-translate-y-1 group"
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {project.featured && (
                  <span className="absolute top-3 right-3 px-2 py-1 bg-portfolio-purple text-white text-xs font-medium rounded-md z-20">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className={cn(
                    "inline-flex items-center font-medium text-portfolio-blue",
                    "hover:text-portfolio-purple transition-colors"
                  )}
                >
                  View Project
                  <svg 
                    className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center fade-in-section">
          <a 
            href="https://github.com/alextaylor" 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2",
              "bg-gray-900 text-white",
              "hover:bg-gray-800 transition-all"
            )}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.163 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.645.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.254-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.934.359.31.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
