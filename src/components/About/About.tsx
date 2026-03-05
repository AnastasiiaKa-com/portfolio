import Reveal from "../Reveal";
import styles from "./About.module.css";

const About = () => {
  return (
    <Reveal>
    <section id="about" className={styles.about}>
      <div className={styles.card}>
        <h2>About Me</h2>
        <p>
          I am a Frontend Developer based in Hamburg, focused on building
          responsive and user-friendly web applications.
        </p>
        <p>
        I’m eager to apply my skills in real projects. I’m open to junior roles, internships, or collaborative projects where I can gain practical experience and continue improving as a developer
        </p>
      </div>
    </section>
    </Reveal>
  );
};

export default About;