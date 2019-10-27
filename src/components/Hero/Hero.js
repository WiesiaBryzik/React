import React from 'react';
import styles from './MyComponent.scss';

const MyComponent = () => (
  <header className={styles.component}>
    <h2 className={styles.title}>Things to do</h2>
    <img className={styles.image} src="https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
  </header>
);

export default MyComponent;