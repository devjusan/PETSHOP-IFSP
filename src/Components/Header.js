import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dog from '../Assets/headerLogo.png';

const Header = () => {
  const [burguer, setBurguer] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.img}>
        <a href="/">
          <img src={Dog} alt="Imagem no cabeçalho." />
          <span className={styles.name}>IFSPet</span>
        </a>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/sobre">SOBRE NÓS</Link>
          </li>
          <li>
            <Link to="/contato">CONTATO</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.hamPosition}>
        {burguer ? (
          <div
            onClick={() => setBurguer(false)}
            className={styles.navBurguerClosed}
          />
        ) : (
          <div
            onClick={() => setBurguer(true)}
            className={`${styles.navOpened}`}
          >
            <nav className={styles.navStyle}>
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/sobre">SOBRE NÓS</Link>
                </li>
                <li>
                  <Link to="/contato">CONTATO</Link>
                </li>
              </ul>
            </nav>
            <div className={`${styles.navBurguerOpen}`}></div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
