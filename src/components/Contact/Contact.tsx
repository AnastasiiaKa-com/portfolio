import Reveal from "../Reveal";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <Reveal>
      <section id="contact" className={styles.contact}>
        <div className={styles.card}>
          <h2>Contact</h2>

          <p>
            I’m currently open to Junior Frontend Developer opportunities and internships.
          </p>

          <div className={styles.info}>
            <p>Email: nastya.karpenko.20152012@gmail.com</p>
            <p>Location: Hamburg, Germany</p>
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nastya.karpenko.20152012@gmail.com"
            className={`${styles.button} ${styles.primary}`}
          >
            📧 Write me
          </a>
        </div>
      </section>
    </Reveal>
  );
};

export default Contact;