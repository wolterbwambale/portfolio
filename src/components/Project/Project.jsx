import { useState } from 'react';
import projects from '../../data/project';
import styles from './Project.module.css';
import ProjectCard from './projectCard';

const Project = () => {
  const [Visible, setVisible]=useState(3)
  const showMoreProject = ()=>{
    setVisible((prevValue) =>prevValue +3)
  }

  return (
    <section className={styles.container} id="project">
      <h1 className={styles.title}>Recent Projects</h1>
      <div className={styles.project}>
          {projects.slice(0,Visible).map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
      </div>
      <button className={styles.cardbtn} onClick={showMoreProject}>show more</button>
    </section>
  );
};

export default Project;
