import React from 'react'
import  styles from './Experience.module.css';
import skills from '../../data/skills';
import { getImageUrl } from '../../utils';

const Experience = () => {
  return (
    <section id="experience">
        <h1>Experience</h1>
        <div>
            <div>{skills.map((skill, id) =>{
                return(                                                                                                                            
                   <div key={id}>
                    <div>
                    <img className={styles.img_experience} src={getImageUrl(skill.imgscr)} alt={skill.title} />
                    </div> 
                    <p>{skill.title}</p>
                  </div>
                )
            })}</div>
        </div>

    </section>
  )
}

export default Experience