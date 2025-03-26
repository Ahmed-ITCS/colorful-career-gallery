
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Ahmed Khawar</h3>
            <p className="text-gray-400 mb-4">
             Full Stack Engineer. with 1+ years of experience.
            </p>
            <p className="text-gray-400">
              Based in Al-Khobar, Saudi Arabia
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Experience", href: "#experience" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" }
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.linkedin.com/in/ahmed-k-b44781128/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-800 hover:bg-portfolio-blue transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a 
                href="https://github.com/Ahmed-ITCS" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-800 hover:bg-portfolio-blue transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.163 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.645.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.254-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.934.359.31.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.16 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            
            </div>
            
            <p className="text-gray-400">
              <span className="block mb-1">Email: ahmedkhawarbs@gmail.com</span>
              <span>Phone: +966549488428</span>
            </p>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Ahmed Khawar. All rights reserved.</p>
          <p className="mt-2">
            Designed with
            <span className="mx-1">❤️</span>
            and crafted with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
