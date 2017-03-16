import React, { Component } from 'react';
import styles from './MessageForm.css';
import stylesRed from './MessageFormRed.css';
import stylesGreen from './MessageFormGreen.css';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = { timestamp: '', text: '' };
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text !== '') {
            const message = {
                timestamp: this.state.timestamp,
                from: this.props.name,
                text: this.state.text
            };
            this.props.onMessageSubmit(message);
            this.setState({ timestamp: '', text: '' });
        }
    }

    changeHandler(e) {
        const timestamp = new Date().toLocaleTimeString();
        this.setState({ timestamp: timestamp, text: e.target.value });
    }

    render() {
        return (
            <form className={styles.MessageForm} onSubmit={e => this.handleSubmit(e)}>
                <input
                    className={this.props.theme === 'red' ? stylesRed.MessageInput : (this.props.theme === 'green' ? stylesGreen.MessageInput : styles.MessageInput)}
                    onChange={e => this.changeHandler(e)}
                    value={this.state.text}
                    placeholder='Message'
                />
            </form>
        );
    }
}

export default MessageForm;