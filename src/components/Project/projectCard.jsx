import React from "react";
import styles from "./projectCard.module.css"
import { getImageUrl } from '../../utils';

const projectCard = ({project:{imagesrc,title,description,skills,demo,source}}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imagesrc)}
        alt={`image of ${title}` } className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}> 
        {skills.map((skill) => {
          return <li className={styles.skill}>{skill}</li>;
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>Demo</a>
        <a href={source} className={styles.link}>source</a>
      </div>
    </div>
  );
};

export default projectCard;
