
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  tech: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: "1",
      title: "Personal Portfolio",
      description: "A modern portfolio website showcasing my skills and projects.",
      image: "/assets/00.png",
      date: "May 2025",
      category: "Website Development",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      links: {
        demo: "https://portfolio-liard-gamma-59.vercel.app/#contact",
        github: "https://github.com/AKC07-Dev/Portfolio",
      },
    },
    {
      id: "2",
      title: "Spices & Stories",
      description: "Indian Dishes Recipe site with various categories.",
      image: "/assets/01.png",
      date: "August 2024",
      category: "Website Development",
      tech: ["HTML", "CSS"],
      links: {
        github: "https://github.com/AKC07-Dev/recipe-site",
      },
    },
    {
      id: "3",
      title: "Mother's Day Card",
      description: "Attractive template of Mother's day greeting card.",
      image: "/assets/03.png",
      date: "May 2025",
      category: "Website Development",
      tech: ["React", "CSS"],
      links: {
        github: "https://github.com/AKC07-Dev/Mother-s-Day-Greeting-Card",
      },
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-darker to-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            My Projects <span className="purple-arrow">↓</span>
          </h2>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-darker/50 backdrop-blur-sm">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="website">Websites</TabsTrigger>
              <TabsTrigger value="apps">Web Apps</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="website" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => p.category === "Website Development")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="apps" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => p.category === "Web App")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-purple-primary text-white hover:bg-purple-primary/10 inline-flex items-center gap-2">
            View All Projects <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-darker border border-gray-800 rounded-lg overflow-hidden hover:border-purple-primary/50 transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-video">
        <span className="absolute top-2 right-2 text-xs bg-purple-primary/80 text-white px-2 py-1 rounded-md backdrop-blur-sm z-10">
          {project.date}
        </span>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-light transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-secondary/50 text-gray-300 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {project.links.demo && (
            <a 
              href={project.links.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-white hover:text-purple-light flex items-center gap-1 transition-colors"
            >
              <ExternalLink size={14} /> Demo
            </a>
          )}
          {project.links.github && (
            <a 
              href={project.links.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-white hover:text-purple-light flex items-center gap-1 transition-colors"
            >
              <Github size={14} /> Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
