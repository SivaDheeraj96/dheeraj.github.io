import styles from './skills.module.scss';
import data from './../data/info.json';

interface props {
  name: string,
  value: string[],
}
const SkillGroup = (props: props) => {
  const skills = props.value.map(val => (<span className={styles['skill-name']}>{val}</span>));
  return (
    <div className={styles['skill-group-container']}>
        <label className={styles['skill-group-name']}>{props.name}</label>
        <div className={styles['skill-name-container']}>{skills}</div>
    </div>
  );
};
export const Skills = () => {
  const skills = data.skills.map(skillGroup => (<SkillGroup name={skillGroup.name} value={skillGroup.value}/>));
  return (
    <div className={styles["skills-container"]}>
      {skills}
    </div>
  );
};