import React from 'react';
import { LeftRail } from './LeftRail';
import styles from './styles/homepage.module.scss';

export interface Section_t {
  type : 'home' | "skills" | 'experience' | 'contact';
}
export const Homepage: React.FC = () => {
  const [section, setSection] = React.useState<Section_t['type']>('home');
  return (
  <>
    <div className={styles['main-container']}>
      <LeftRail setSection={setSection}></LeftRail>
      <div className={styles['body-content']} >
        <div className={styles['header-container']} >
          <span className={styles['title']}> Welcome to My Website</span>
        </div>
        {section === 'home' &&
          (<div className='home-container'>This is My Home Page</div>)
        }
        {section === 'skills' &&
          (<div className='skills-container'>This is My Skills Page</div>)
        }
        {section === 'experience' &&
          (<div className='experience-container'>This is My Experience Page</div>)
        }
        {section === 'contact' &&
          (<div className='contact-container'>This is My Contact Page</div>)
        }
      </div>
    </div>
  </>
  );
};
