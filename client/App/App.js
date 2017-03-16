import React, { Component } from 'react';
import io from 'socket.io-client';
const socket = io('/');

import styles from './App.css';
import stylesRed from './AppRed.css';
import stylesGreen from './AppGreen.css';

import MessageForm from '../MessageForm/MessageForm';
import MessageList from '../MessageList/MessageList';
import UsersList from '../UsersList/UsersList';
import UserForm from '../UserForm/UserForm';

import gitIcon from 'file-loader!../assets/img/git.png';
import webChatBaner from 'file-loader!../assets/img/react.png';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            messages: [],
            text: '',
            name: '',
            theme: '',
        };
    }
    componentDidMount() {
        socket.on('message', message => this.messageReceive(message));
        socket.on('update', ({ users }) => this.chatUpdate(users));
    }
    messageReceive(message) {
        const messages = [message, ...this.state.messages];
        this.setState({ messages });
    }
    chatUpdate(users) {
        this.setState({ users });
    }
    handleMessageSubmit(message) {
        const messages = [message, ...this.state.messages];
        this.setState({ messages });
        socket.emit('message', message);
    }
    handleUserSubmit(name, theme) {
        this.setState({ name: name, theme: theme });
        socket.emit('join', name);
    }
    pickTheme() {
        switch (this.state.theme) {
            default:
                return styles.AppTitle
        }
    }
    render() {
        return this.state.name !== '' ? this.renderLayout() : this.renderUserForm();
    }
    renderLayout() {
        return (
            <div className={styles.App}>
                <div className={styles.AppHeader}>
                    <div className={this.state.theme === 'red' ? stylesRed.AppTitle : (this.state.theme === 'green' ? stylesGreen.AppTitle : styles.AppTitle)}>
                        <img src={webChatBaner} />
                    </div>
                    <div className={this.state.theme === 'red' ? stylesRed.AppRoom : (this.state.theme === 'green' ? stylesGreen.AppRoom : styles.AppRoom)}>
                        Welcome to React Chat :)
                    </div>
                    <div className={this.state.theme === 'red' ? stylesRed.GitIcon : (this.state.theme === 'green' ? stylesGreen.GitIcon : styles.GitIcon)}>
                        <a href="https://github.com/Taporpone/Chat"><img src={gitIcon} /></a>
                    </div>
                </div>
                <div className={styles.AppBody}>
                    <UsersList
                        users={this.state.users}
                        theme={this.state.theme}
                    />
                    <div className={styles.MessageWrapper}>
                        <MessageList
                            messages={this.state.messages}
                            theme={this.state.theme}
                        />
                        <MessageForm
                            onMessageSubmit={message => this.handleMessageSubmit(message)}
                            name={this.state.name}
                            theme={this.state.theme}
                        />
                    </div>
                </div>
            </div>

        )
    }
    renderUserForm() {
        return (<UserForm onUserSubmit={(name, theme) => this.handleUserSubmit(name, theme)} />);
    }
};

export default App;
