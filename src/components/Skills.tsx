
import SkillProgress from "./SkillProgress";
import { motion } from "framer-motion";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", level: 10 },
    { name: "CSS", level: 10 },
    { name: "JavaScript", level: 8 },
    { name: "ReactJS", level: 9 },
    { name: "Tailwind", level: 9 },
  ];

  const otherSkills = [
    { name: "C Programming", level: 7 },
    { name: "Java (OOP)", level: 6 },
    { name: "Communication", level: 7 },
    { name: "Project Management", level: 5 },
     { name: "Teamwork", level: 6 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 bg-dark">
      <div className="container-custom">
        <h2 className="section-title">
          My skills <span className="purple-arrow">↓</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-6 text-gradient">Frontend Development</h3>
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <SkillProgress name={skill.name} level={skill.level} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-6 text-gradient">Other Skills</h3>
            <div className="space-y-4">
              {otherSkills.map((skill) => (
                <motion.div key={skill.name} variants={item}>
                  <SkillProgress name={skill.name} level={skill.level} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
