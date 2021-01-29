import React from 'react';
import styles from './Footer.module.css';
import Dog from '../Assets/footerLogo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.img}>
        <img src={Dog} alt="Logo no rodapé." />
      </div>
      <div className={styles.contact}>
        <p>
          <strong>Localização</strong>
        </p>
        <div className={styles.p}>
          <p>Cidade: Cancun</p>
          <p>Rua: Me Gusta</p>
          <p>40028922</p>
        </div>
      </div>
      <div className={`${styles.menu} ${styles.contact}`}>
        <p>
          <strong>Menu</strong>
        </p>
        <div className={styles.p}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/sobre">SOBRE</Link>
              </li>
              <li>
                <Link to="/contato">CONTATO</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <p className={styles.dev}>Desenvolvido por @devjusan</p>
    </footer>
  );
};

export default Footer;
