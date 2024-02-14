/* eslint-disable */
import styles from "./projectCard.module.css";
import { getImageUrl } from '../../utils';

const ProjectCard = ({ project: { title, description,language, skills, demo, source } }) => {
  return (
    <div className={styles.container}>
      {/* */}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <h4 className={styles.lang}>{language}</h4>
      <ul className={styles.skills}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>Clone</a>
        <a href={source} className={styles.link}>Repo</a>
      </div>
    </div>
  );
};

export default ProjectCard;
