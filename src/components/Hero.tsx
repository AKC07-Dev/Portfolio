
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";



const Hero = () => {


  const handleDownloadCV = () => {
    // Replace this URL with your actual CV link
    window.open("/assets/Akc_Resume2.pdf", "_blank");
  };
const handleViewProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-hero-pattern pt-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-purple-light font-medium mb-4">
              FRONT-END DEVELOPER
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Antara <br />
              <span className="text-gradient">Chitte</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              A passionate web developer creating engaging and user-friendly digital experiences with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="glow-button" onClick={handleViewProjects}>
                View My Projects
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 border-purple-primary text-white hover:bg-purple-primary/10"
              onClick={handleDownloadCV}>
                <Download className="w-4 h-4" /> Download CV
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <div className="relative w-64 md:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-primary to-blue-accent blur-3xl opacity-20"></div>
              <div className="relative w-full h-full aspect-square rounded-full border-2 border-purple-primary/30 p-2 animate-glow">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-primary/10 to-blue-accent/10">
                  <img 
                    src="/assets/me.jpeg" 
                    alt="Antara Chitte"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
