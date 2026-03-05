import Reveal from "../Reveal";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "React Router",
  "Redux",
  "REST API",
  "Git",
  "Vite",
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
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Skills;