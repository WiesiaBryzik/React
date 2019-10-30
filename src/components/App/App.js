import React from 'react';
import {pageContents, listData} from '../../data/dataStore';
import styles from './App.scss';
import List from '../List/List.js';


class App extends React.Component {
  render() {
    return (
      <main className={styles.component}> 
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <List {...listData} />
      </main>
    )
  }
}

export default App;




{/* <main className={styles.component}> */}
//   <h1 className={styles.title}>My first React app</h1>
//   <h2 className={styles.subtitle}>Hello world! </h2>
//   <List title={['Thingssss to do ', <sup key='1'>soon!</sup>]}>
//     <p>I'm plannnnnnnnnning on doing all these things sooner, rather than later!</p>
//   </List>
//   {/* <List image='https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' /> */}
// </main>