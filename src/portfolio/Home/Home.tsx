import styles from './home.module.scss';
import data from './../data/info.json';
interface props {
  name: string,
  link: string,
  text: string,
}
const SocialMedia = (props: props) => {
  return (
    <a className={styles['link-container']} target='_blank' href={props.link}>
        <label className={styles['name']}>{props.name}</label>
        <span>{props.text}</span>
    </a>
  );
};
export const Home = () => {

  return (
    <div className={styles["home-container"]}>
      <span className={styles['name-holder']}><p>Hi, I am {data.name.first}, {data.name.last}.</p>
      <p>Welcome to My page</p></span>
      <div className={styles['social-media-container']}>
        {data['social-media'].map( (info) => 
          <SocialMedia {...info}></SocialMedia>) 
        }
      </div>
    </div>
  );
};