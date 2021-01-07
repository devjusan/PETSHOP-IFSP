import React from 'react';
import styles from './DogPhotoContent2.module.css';

const DogPhotoContent2 = () => {
  return (
    <section className={styles.dogContent2}>
      <div className="text">
        <h1>
          O que{' '}
          <strong>
            oferecemos? <br />
          </strong>
        </h1>
        <p className="normalText">
          Contamos com uma área de lazer de 300m&sup2; livres para o seu animal.
          Possuímos medicamentos, alimentos e ferramentas úteis ao seu bichinho.
          Áreas climatizas, espaço para socialização, área médica, salas de
          banho e tosa e um sistema de monitoramento de segunda à segunda por
          meio de aplicativos exclusivos.
        </p>
      </div>
    </section>
  );
};

export default DogPhotoContent2;
