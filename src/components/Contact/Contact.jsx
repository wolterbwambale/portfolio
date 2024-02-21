import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <p></p>
        <h2>Get In Touch</h2>
        <p>Feel free to reach out to me</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/mail.png")} alt="" />
          <a href="mailto:benplaan1@gmail.com">benplaan1@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedin.png")} alt="linkedin" />
          <a href="https://www.linkedin.com/in/bwambale-benny-wolter/">https://www.linkedin.com/in/bwambale-benny-wolter</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="github" />
          <a href="https://github.com/wolterbwambale">github.com/wolterbwambale</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
