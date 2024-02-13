/* eslint-disable */
import styles from "./projectCard.module.css";
import { getImageUrl } from '../../utils';

const ProjectCard = ({ project: { imagesrc, title, description, skills, demo, source } }) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imagesrc)}
        alt={`image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, index) => (
          // Add a unique key prop to each li element
          <li key={index} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>Demo</a>
        <a href={source} className={styles.link}>Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
