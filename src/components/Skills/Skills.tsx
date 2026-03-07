import Reveal from "../Reveal";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiRedux, SiVite } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Vite", icon: <SiVite /> },
];

const Skills = () => {
  return (
    <Reveal>
      <section id="skills" className={styles.skills}>
        <div className="container">
          <h2>Skills</h2>

          <div className={styles.grid}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.icon}>{skill.icon}</div>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </Reveal>
  );
};

export default Skills;