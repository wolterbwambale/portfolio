import styles from './About.module.css';
import { getImageUrl } from '../../utils';

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h1 className={styles.title}>About</h1>
        <div className={styles.content}> 
            <img src={getImageUrl("about/hacker.png")} alt="me seated with computer" className={styles.aboutMaainImg} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursor.png")} alt="pointer" className={styles.aboutImage} />
                <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>I'm frontend with experience of building responsive and optimize sites</p>
                </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/server.png")} alt="server"className={styles.aboutImage} />
                <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>I have Experience of developing optimised Backend systems and API's</p>
                </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursor.png")} alt="pointer"className={styles.aboutImage} />
                <div className={styles.aboutItemText}>
                <h3>UI Design</h3>
                <p>I have design multiple  landing pages and i have created  systems as well</p>
                </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About