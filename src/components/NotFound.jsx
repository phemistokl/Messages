import React, { Component } from 'react';

import styles from './NotFound.less';

export default class NotFound extends Component {
    render() {
        return (
            <div className={styles.NotFound}>
              <h2 className={styles.title}>
                Oooops! Looks like this page does not exist!
              </h2>
            </div>
        );
    }
}
