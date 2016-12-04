import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './App.less';

export default class App extends Component {
    render() {
        return (
            <div className={styles.App}>
              <div className={styles.menu__bar}>
                <div className={styles.menu__item}>
                  <Link className={styles.menu__item__link} to="/about">About</Link>
                </div>

                <div className={styles.menu__item}>
                  <Link className={styles.menu__item__link} to="/inbox">Inbox</Link>
                </div>
              </div>
              <div className={styles.content}>
                {this.props.children}
              </div>
            </div>
        );
    }
}
