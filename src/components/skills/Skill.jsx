import React, { useState } from 'react';
import styles from './Skill.module.css';

const Skill = () => {
  const [activeTab, setActiveTab] = useState('softSkills');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className={styles.skillsTabs} id="skill">
        <h1 className={styles.title}>Skills</h1>
      <div className={styles.tabButtons}>
        <button
          className={activeTab === 'softSkills' ? styles.activeTab : ''}
          onClick={() => handleTabChange('softSkills')}
        >
          Soft Skills
        </button>
        <button
          className={activeTab === 'technicalSkills' ? styles.activeTab : ''}
          onClick={() => handleTabChange('technicalSkills')}
        >
          Technical Skills
        </button>
      </div>

      <div className={styles.skillsContent}>
        {activeTab === 'softSkills' && (
          <div className={styles.softskillP}>
            <p>Goal-Oriented</p>
            <p>Pair Programming</p>
            <p>Communication</p>
            <p>Teamwork</p>
            <p>Goal-Oriented</p>
            <p>Problem-Solving</p>
            <p>Positivity</p>
            <p>Organization</p>
            <p>Adaptability</p>
          </div>
        )}

        {activeTab === 'technicalSkills' && (
          <div>
            {/* Content for Technical Skills */}
            <p>React.js</p>
            <p>JavaScript</p>
            <p>Data Structures</p>
            <p>C/C++</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>HTML/CSS</p>
            <p>Ruby</p>
            <p>Ruby on Rails</p>
            <p>TDD</p>
            <p>Git</p>
            <p>SQL</p>
            <p>Java</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skill;
