import React from 'react';
import styles from './DogSlideShow.module.css';
import veterinarian from '../../../Assets/veterinarian.png';
import tosa from '../../../Assets/tosa.png';

const DogSlideShow = () => {
  return (
    <div className={`${styles.aChoice}`}>
      <div className={styles.img}>
        <img
          width="82"
          height="82"
          src={veterinarian}
          alt="Foto de um veterinário."
        />
      </div>
      <div>
        <hr className={styles.separator} />
      </div>
      <div className={styles.choiceText}>
        <p>
          Nossos veterinários tomarão conta dos seus bichinhos como se fizessem
          parte da família. <br /> É o nosso segredo.
        </p>
      </div>

      <div className={styles.img}>
        <img width="82" height="82" src={tosa} alt="Foto de um veterinário." />
      </div>
      <div>
        <hr className={styles.separator} />
      </div>
      <div className={styles.choiceText}>
        <p>
          O seu doguinho tem os melhores produtos pra sair daqui com um
          cheirinho de bebê!
        </p>
      </div>
    </div>
  );
};

export default DogSlideShow;
