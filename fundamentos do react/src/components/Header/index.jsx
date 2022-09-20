import React from 'react';
import styles from './Header.module.css';
import igniteLogo from '../../assets/ignite-simbol.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt='logo tipo do ignite' />
      <strong>iginte feed</strong>
    </header>
  );
}
