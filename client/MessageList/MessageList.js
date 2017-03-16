import React from 'react';

import styles from './MessageList.css';
import stylesRed from './MessageListRed.css';
import stylesGreen from './MessageListGreen.css';

const Message = props => (
    <div className={styles.Message}>
        <span className={styles.Timestamp}>{props.timestamp}</span>
        <strong> {props.from} </strong>
        <span>{props.text}</span>
    </div>
);

const MessageList = props => (
    <div className={props.theme === 'red' ? stylesRed.MessageList : (props.theme === 'green' ? stylesGreen.MessageList : styles.MessageList)}>
        {
            [...props.messages].reverse().map((message, i) => {
                return(
                    <Message
                        key={i}
                        timestamp={message.timestamp}
                        from={message.from}
                        text={message.text}
                    />
                );
            })
        }
    </div>
);

export default MessageList;