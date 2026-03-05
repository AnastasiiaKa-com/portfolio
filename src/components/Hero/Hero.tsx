
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.title}>
            Hi, I'm <span className="gradientText">Anastasiia</span>
          </h1>

          <p className={styles.subtitle}>
            Frontend Developer building responsive web applications
            with React & TypeScript.
          </p>

          <div className={styles.buttons}>
            <motion.button
              className={`${styles.button} ${styles.primary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </motion.button>

            <motion.button
              className={`${styles.button} ${styles.secondary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}