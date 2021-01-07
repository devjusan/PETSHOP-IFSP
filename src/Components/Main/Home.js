import React from 'react';
import DogPhoto from './Section1/DogPhoto';
import DogPhotoContent from './Section1/DogPhotoContent';
import styles from './Home.module.css';
import DogPhoto2 from './Section2/DogPhoto2';
import DogPhotoContent2 from './Section2/DogPhotoContent2';
import ContentOptions from './Section3/ContentOptions';
import KnowPrices from './Section4/KnowPrices';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.section1}>
        <DogPhoto />
        <DogPhotoContent />
      </div>

      <div className={styles.section2}>
        <div>
          <DogPhoto2 />
        </div>
        <div>
          <DogPhotoContent2 />
        </div>
      </div>

      <div className={styles.section3}>
        <ContentOptions />
      </div>

      <div className={styles.section4}>
        <KnowPrices />
      </div>
    </div>
  );
};

export default Home;
