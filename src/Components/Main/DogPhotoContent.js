import React from 'react';
import styles from './DogPhotoContent.module.css';
import DogSlideShow from './DogSlideShow';

const DogPhotoContent = () => {
  return (
    <div className={styles.dogPhotoContent}>
      <div className={styles.text}>
        <h1>
          <strong>
            Tudo o que o seu cão <br /> precisa
          </strong>{' '}
          você <br />
          encontra aqui!
        </h1>
        <p className={styles.textP}>CUIDADO. CARINHO. DIVERSÃO.</p>
        <div>
          <DogSlideShow />
        </div>
      </div>
    </div>
  );
};

export default DogPhotoContent;
