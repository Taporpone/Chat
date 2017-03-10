import React, { Component } from 'react';
import styles from './UserForm.css';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', emptyName: false };
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.name === '' || this.state.name.length >= 20) {
            this.setState({ emptyName: true });
        } else {
            this.props.onUserSubmit(this.state.name);
        }

    }
    handleChange(e) {
        this.setState({ name: e.target.value });
    }
    render() {
        return (
            <form className={styles.UserForm} onSubmit={e => this.handleSubmit(e)}>
                <input
                    className={styles.UserInput}
                    placeholder='Choose your nickname'
                    onChange={e => this.handleChange(e)}
                    value={this.state.name}
                />
                <p className={styles.EmptyName}>{this.state.emptyName ? 'Nick must be 1 - 20 chars long' : ''}</p>
            </form>
        )
    }
}

export default UserForm; 