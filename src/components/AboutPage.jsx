import React, { Component } from 'react';

import styles from './AboutPage.less';

export default class AboutPage extends Component {
    render() {
        return (
            <div className={styles.AboutPage}>
              <h2 className={styles.title}>
                It is a long established fact that
              </h2>

              <div className={styles.text}>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </div>
            </div>
        );
    }
}
