import React from 'react';
import styles from './DogPhoto2.module.css';
import dog from '../../../Assets/estrutura.jpg';

const DogPhoto2 = () => {
  return (
    <div className={styles.dogPhoto2}>
      <img
        className={styles.img2}
        src={dog}
        alt="Cachorro no estabelecimento"
      />
    </div>
  );
};

export default DogPhoto2;
