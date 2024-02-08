import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills";
import data from "../../data/data";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h1 className={styles.title}>Experience</h1>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skills}>
                <div className={styles.skillImgcontainer}>
                  <img
                    className={styles.img_experience}
                    src={getImageUrl(skill.imgscr)}
                    alt={skill.title}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={StyleSheet.history}>
          {data.map((exp, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img src={getImageUrl(data.imgscr)} alt="" />
                <div className={styles.historyDetails}>
                  <h2>{`${exp.company},${exp.role}`}</h2>
                  <p>{`${exp.start_date} - ${exp.end_date}`}</p>
                  <ul>
                    {exp.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
