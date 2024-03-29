import styles from './About.module.css';
import { getImageUrl } from '../../utils';

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>About</h1>
      <div className={styles.content}>
        <img
          src={getImageUrl('about/hacker.png')}
          alt="me seated with computer"
          className={styles.aboutMaainImg}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl('about/user-experience.png')}
              alt="pointer"
              className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I&apos;m frontend with experience of building responsive and optimize sites</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl('about/server.png')}
              alt="server"
              className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have Experience of developing optimized Backend systems and API&apos;s</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl('about/user-interface.png')}
              alt="pointer"
              className={styles.aboutImage}
            />
            <div className={styles.aboutItemText}>
              <h3>UI Design</h3>
              <p>I have design multiple landing pages and I have created systems as well</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
