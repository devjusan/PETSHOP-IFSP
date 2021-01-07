import React from 'react';
import styles from './DogPhotoContent.module.css';
import DogSlideShow from './DogSlideShow';

const DogPhotoContent = () => {
  return (
    <section className={styles.dogPhotoContent}>
      <div className="text">
        <h1>
          <strong>
            Tudo o que o seu cão <br /> precisa
          </strong>{' '}
          você <br />
          encontra aqui!
        </h1>
        <p className="textP">CUIDADO. CARINHO. DIVERSÃO.</p>
        <div>
          <DogSlideShow />
        </div>
      </div>
    </section>
  );
};

export default DogPhotoContent;
