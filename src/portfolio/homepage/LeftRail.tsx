import { Section_t } from './Homepage';
import styles from './styles/leftRail.module.scss';


interface props{
  setSection:(section:Section_t['type']) => void;
}
export const LeftRail = (props: props) => {
  return (
    <div className={styles["left-rail-container"]}>
      <div className={styles["left-menu-item"]}></div>
      <div>
        <nav className={styles['menu-container']}>
          <span className={styles['menu-option']} onClick={() => props.setSection('home')}>Home</span>
          <span className={styles['menu-option']} onClick={() => props.setSection('skills')}>Skills</span>
          <span className={styles['menu-option']} onClick={() => props.setSection('experience')}>Experience</span>
          <span className={styles['menu-option']} onClick={() => props.setSection('contact')}>Contact</span>
        </nav>
      </div>
    </div>
  );
};