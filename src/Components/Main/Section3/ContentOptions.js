import React from 'react';
import styles from './ContentOptions.module.css';
import img1 from '../../../Assets/recreation.svg';
import img2 from '../../../Assets/security.svg';
import img3 from '../../../Assets/funny.svg';
import img4 from '../../../Assets/rating.svg';
import img5 from '../../../Assets/medicine.svg';
import img6 from '../../../Assets/event.svg';

const ContentOptions = () => {
  return (
    <div className={styles.contentOptions}>
      <div className={`${styles.item}`}>
        <div className={styles.hoverImg}>
          <img src={img1} alt="Lazer" />
        </div>
        <p className={`${styles.contentText}`}>
          Piscinas e uma <br />
          área de 300m<sup>2</sup>
        </p>
      </div>
      <div className={`${styles.item}`}>
        <div className={styles.hoverImg}>
          <img src={img2} alt="Segurança" />
        </div>
        <p className={styles.contentText}>
          Contamos com vigilância <br />
          24hrs pelo seu celular
        </p>
      </div>
      <div className={`${styles.item}`}>
        <div className={styles.hoverImg}>
          <img src={img3} alt="Diversão" />
        </div>
        <p className={styles.contentText}>
          Área de brinquedos <br />e eventos internos
        </p>
      </div>
      <div className={`${styles.item}`}>
        <div className={styles.hoverImg}>
          <img src={img4} alt="Entre triste e sai feliz" />
        </div>
        <p className={styles.contentText}>
          Seu cão sai mais feliz <br /> do que quando entrou
        </p>
      </div>
      <div className={`${styles.item} ${styles.item5}`}>
        <div className={styles.hoverImg}>
          <img src={img5} alt="Medicina Veterinária" />
        </div>
        <p className={`${styles.contentText} `}>
          Cuidados médicos <br />
          especiais ao seu cão
        </p>
      </div>
      <div className={`${styles.item} ${styles.item6}`}>
        <div className={styles.hoverImg}>
          <img src={img6} alt="Eventos" />
        </div>
        <p className={`${styles.contentText} `}>
          Os melhores eventos <br /> entre a cãovinhança
        </p>
      </div>
    </div>
  );
};

export default ContentOptions;
