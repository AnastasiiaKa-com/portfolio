import Reveal from "../Reveal";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <Reveal>
      <section id="projects" className={styles.projects}>
        <h2>Projects</h2>

        <div className={styles.grid}>
       
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="/movie-preview.png"
                alt="Movie App preview"
              />
            </div>

            <h3>Movie App</h3>
            <p>
              React + TypeScript movie search application using TMDB API.
            </p>

            <div className={styles.links}>
              <a
                href="https://github.com/AnastasiiaKa-com/react-movie-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://anastasiiaka-com.github.io/react-movie-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src="/weather-preview.png"
                alt="Weather App preview"
              />
            </div>

            <h3>Weather App</h3>
            <p>
              Weather forecast app using REST API and modern UI design.
            </p>

            <div className={styles.links}>
              <a
                href="https://github.com/AnastasiiaKa-com/react-weather-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://anastasiiaka-com.github.io/react-weather-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Projects;