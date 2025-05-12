
import { Linkedin, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/antara-chitte-44b364329" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/AKC07-Dev" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com/" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:antarachitte.genai@gmail.com" },
  ];

  return (
    <footer className="bg-darker py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-gradient">
              Antara<span className="text-white">.dev</span>
            </span>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-light transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-gray-500 text-sm">
            &copy; {currentYear} Antara Chitte. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
