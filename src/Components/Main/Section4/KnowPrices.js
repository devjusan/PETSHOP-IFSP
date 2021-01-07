import React from 'react';
import { Link } from 'react-router-dom';
import styles from './KnowPrices.module.css';

const KnowPrices = () => {
  return (
    <section className={`text ${styles.section}`}>
      <h1>Conheça os nossos valores</h1>
      <div className={styles.tables}>
        <div>
          <div className={styles.monthTable}>
            Pacote Mensal
            <ul>
              <li>
                1x semana <span>. . . . . . . . . .</span> R$250
              </li>
              <li>
                2X semana <span>. . . . . . . . . .</span> R$300
              </li>
              <li>
                3x semana <span>. . . . . . . . . .</span> R$350
              </li>
              <li>
                4x semana <span>. . . . . . . . . .</span> R$400
              </li>
              <li>
                5x semana <span>. . . . . . . . . .</span> R$600
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className={styles.trimestralTable}>
            Pacote Trimestral
            <ul>
              <li>
                1x semana <span>. . . . . . . . . .</span> R$200
              </li>
              <li>
                2X semana <span>. . . . . . . . . .</span> R$250
              </li>
              <li>
                3x semana <span>. . . . . . . . . .</span> R$300
              </li>
              <li>
                4x semana <span>. . . . . . . . . .</span> R$350
              </li>
              <li>
                5x semana <span>. . . . . . . . . .</span> R$500
              </li>
            </ul>
          </div>
        </div>
        <Link className="button" to="/contato">
          Faça um orçamento
        </Link>
      </div>
    </section>
  );
};

export default KnowPrices;
