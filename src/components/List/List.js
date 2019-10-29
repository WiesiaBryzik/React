import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    // image: PropTypes.string,
  }
  
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }
  
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        {/* <Hero imageText={this.props.image} /> */}
        
        <div className={styles.columns}>
          <Column title='pierwszy' />
          <Column title='drugi' />
          <Column title='trzeci' />
        </div>
      </section>
    )
  }
}

export default List;