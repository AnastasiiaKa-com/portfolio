import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Anastasiia Karpenko • Built with React
    </footer>
  );
};

export default Footer;