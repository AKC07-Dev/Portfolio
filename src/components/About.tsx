
import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { value: "3+", label: "Projects Complete" },
    { value: "5+", label: "Months Experience" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark to-darker">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              About me <span className="purple-arrow">↓</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              I'm a highly motivated and energetic Web Developer with a passion for crafting engaging and user-friendly digital experiences. With a B.Tech in Computer Engineering from R. C. Patel Institute of Technology, Shirpur, I combine academic excellence with practical skills.
            </p>
            <p className="text-gray-300 mb-8 text-lg">
              During my internship at Akatsuki Coding Club, Shirpur, I honed my ReactJS skills and developed a strong foundation in modern web development practices. I'm constantly learning and growing my skillset to stay at the forefront of web technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8 max-w-md">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-secondary/30 rounded-lg border border-purple-primary/20 backdrop-blur-sm">
                  <p className="text-4xl font-bold text-gradient mb-1">{stat.value}</p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <a href="#contact">
              <button className="glow-button">
                Hire Me
              </button>
            </a>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 md:w-80 lg:w-96 aspect-square rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-primary/20 to-blue-accent/30 backdrop-blur-md"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-purple-primary/40">
                <img 
                  src="/assets/me.jpeg"
                  alt="About Antara Chitte" 
                  className="w-full h-full object-cover"
                />
              </div>
             
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
