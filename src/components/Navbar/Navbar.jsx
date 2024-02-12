import {useState}from 'react'
import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils';

const Navbar = () => {
  const[OpenMenu,setOpenMenu]=useState(false)
  return (
    <nav className={styles.navbar}>
      <a  className={styles.logo}href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn}src={
          OpenMenu ? getImageUrl("nav/cross.png"): 
           getImageUrl("nav/menu.png")} alt="menu" onClick ={() =>setOpenMenu(!OpenMenu)} />
        <ul className={`${styles.menuItem} ${OpenMenu && styles.OpenMenu}`} onClick={() => setOpenMenu(false)}> 
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar