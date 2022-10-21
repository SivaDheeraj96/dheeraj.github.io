import React from 'react';
import { Home } from '../Home/Home';
import { LeftRail } from './LeftRail';
import styles from './styles/homepage.module.scss';

export interface Section_t {
  type : 'home' | "skills" | 'experience' | 'education' | 'contact';
}
export const Homepage: React.FC = () => {
  const [section, setSection] = React.useState<Section_t['type']>('home');
  return (
  <>
    <div className={styles['main-container']}>
      <LeftRail setSection={setSection}></LeftRail>
      <div className={styles['body-content']} >
        <div className={styles['header-container']} >
          <span className={styles['title']}> {section.toUpperCase()}</span>
        </div>
        {section === 'home' &&
          (<Home/>)
        }
        {section === 'skills' &&
          (<div className='skills-container'>This is My Skills Page; still under construction </div>)
        }
        {section === 'experience' &&
          (<div className='experience-container'>This is My Experience Page; still under construction</div>)
        }
        {section === 'education' &&
          (<div className='education-container'>This is My Education Page; still under construction</div>)
        }
        {section === 'contact' &&
          (<div className='contact-container'>This is My Contact Page; still under construction</div>)
        }
        
      </div>
    </div>
  </>
  );
};
