import React from 'react';
import styles from './DogPhoto.module.css';
import happyDog from '../../../Assets/happyDog2.jpg';

const DogPhoto = () => {
  return (
    <div className={styles.dogPhoto}>
      <img
        className={styles.img}
        src={happyDog}
        alt="Cachorro feliz na página inicial."
      />
    </div>
  );
};

export default DogPhoto;
