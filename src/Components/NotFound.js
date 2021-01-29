import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <div className={styles.notFound}>Ooops! Página não encontrada.</div>
      <div className={`${styles.buttonNf} button`}>
        <Link to="/">Voltar</Link>
      </div>
    </>
  );
};

export default NotFound;
