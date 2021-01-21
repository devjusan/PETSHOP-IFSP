import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dog from '../Assets/headerLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { close, open } from '../store/modal';

const Header = () => {
  const mobileModal = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(mobileModal);
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
        {mobileModal ? (
          <div
            onClick={() => dispatch(open())}
            className={styles.navBurguerClosed}
          />
        ) : (
          <div
            onClick={() => dispatch(close())}
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
