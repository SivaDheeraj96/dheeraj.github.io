import styles from './home.module.scss';
import data from './../data/info.json';
import pic from './../static/profile-pic.jpeg';

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
      <span className={styles['name-holder']}><p>Hi, I am &ensp;</p><p className={styles['name-element']}>{data.name.first}, {data.name.last}</p>.</span>
      <div className={styles['profile-pic-container']}>
        <img src={pic}></img>
        <figcaption>
          <span>Full Stack Developer</span>
        </figcaption>
      </div>
      <div className={styles['social-media-container']}>
        {data['social-media'].map( (info) => 
          <SocialMedia {...info}></SocialMedia>) 
        }
      </div>
    </div>
  );
};