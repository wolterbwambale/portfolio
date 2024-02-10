import React from 'react'
import projects from '../../data/project';
import styles from './Project.module.css';
import ProjectCard from './projectCard';


const Project = () => {
  return (
    <section className={styles.container} id="project">
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.project}>
            {projects.map((project, id) =>{ 
                return < ProjectCard key={id} project={project} />
            })}
        </div>

    </section>
  )
}

export default Project