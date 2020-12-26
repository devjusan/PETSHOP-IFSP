import React from 'react';
import styles from './DogSlideShow.module.css';
import veterinarian from '../../Assets/veterinarian.png';
import tosa from '../../Assets/tosa.png';
import left from '../../Assets/left-arrow.png';
import right from '../../Assets/right-arrow.png';

const DogSlideShow = () => {
  const [scrollX, setScrollX] = React.useState(0);

  const handleLess = () => {
    let x = 0;
    x = 460;
    if (x >= 0) {
      setScrollX(-x);
    } else {
    }
  };

  const handlePlus = () => {
    let x = 0;
    x = 460;
    if (x >= -920) {
      setScrollX(0);
    } else {
    }
  };

  return (
    <div className={styles.t}>
      <span onClick={handlePlus} className={styles.next}>
        <img src={left} alt="Mover para a esquerda." />
      </span>
      <div className={styles.choices}>
        <div
          style={{
            marginLeft: scrollX,
            width: 960,
          }}
          className={styles.sep}
        >
          <div className={`${styles.aChoice}`}>
            <img
              width="82"
              height="82"
              src={veterinarian}
              alt="Foto de um veterinário."
            />
            <hr className={styles.separator} />
            <div className={styles.choiceText}>
              Nossos veterinários tomarão conta dos seus bichinhos como se
              fizessem parte da família. <br /> É o nosso segredo.
            </div>
          </div>

          <div className={styles.aChoice}>
            <img
              width="82"
              height="82"
              src={tosa}
              alt="Foto de um veterinário."
            />
            <hr className={styles.separator} />
            <div className={styles.choiceText}>
              O seu doguinho tem os melhores produtos pra sair daqui com um
              cheirinho de bebê!
            </div>
          </div>
        </div>
      </div>
      <span
        style={{ backgroundImage: { right } }}
        onClick={handleLess}
        className={styles.previous}
      >
        <img src={right} alt="Mover para a direita." />
      </span>
    </div>
  );
};

export default DogSlideShow;
