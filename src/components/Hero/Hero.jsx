import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi there. I&apos;m Wolter</h1>
        <h2 className={styles.second_title}>A Full Stack Developer</h2>
        <p className={styles.description}>
          With a background in developing efficient software applications in a global market.
          More than 1300+ hours of experience, including mentoring 10+ junior developers to
          achieve concrete goals on a strict deadline. Strong skills include React, Redux,
          JavaScript, Ruby on Rails, Figma, and Animation Libraries!
        </p>
        <a href="https://docs.google.com/document/d/1CTjuidJ9ResAIwlahQgDF9WGGXLrdkzyOMv-4OlRnOo/edit?usp=sharing" className={styles.contactBtn}>
         Resume
        </a>
      </div>
      <img src={getImageUrl('hero/worker2.png')} alt="worker" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.buttomBlur} />
    </section>
  );
};

export default Hero;
