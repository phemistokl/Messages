import React, { Component } from 'react';

import MessagePreview from './MessagePreview.jsx';

import messages from '../messages.json';

import styles from './InboxPage.less';

export default class InboxPage extends Component {
    constructor() {
        super();

        this.state = {
          messages
        }

        this.handlePreviewClick = this.handlePreviewClick.bind(this);
    }

    static contextTypes = {
      router: React.PropTypes.object.isRequired
    }

    handlePreviewClick(messageId) {
      this.context.router.push(`/inbox/messages/${messageId}`)
    }

    render() {
        const { messages } = this.state;

        const { messageId: selectedMessageId } = this.props.params;

        return (
            <div className={styles.InboxPage}>
              <div className={styles.messages}>
                {
                  messages.map(message =>
                    <MessagePreview
                      key={message.id}
                      selected={message.id === selectedMessageId}
                      onClick={this.handlePreviewClick.bind(null, message.id)}
                      title={message.subject}
                      senderName={message.senderName}
                    />
                  )
                }
              </div>

              <div className={styles.message__container}>
                {this.props.children}
              </div>
            </div>
        );
    }
}
