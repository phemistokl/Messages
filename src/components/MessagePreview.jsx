import React, { Component } from 'react';

import styles from './MessagePreview.less';

export default class MessagePreview extends Component {
    render() {
        const { title, senderName, selected, onClick } = this.props;

        return (
            <div className={selected ? styles.selected : styles.MessagePreview} onClick={onClick}>
              <div className={styles.title}>
                {title}
              </div>

              <div className={styles.from}>
                {`from ${senderName}`}
              </div>
            </div>
        );
    }
}
