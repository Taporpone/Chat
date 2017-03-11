import React, { Component } from 'react';
import styles from './UserForm.css';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', emptyName: false, themeColor: 'blue' };
    }

    chooseTheme(color) {
        switch (color) {
            case 'blue':
                this.setState({ themeColor: 'blue' });
                break;
            case 'red':
                this.setState({ themeColor: 'red' });
                break;
            case 'green':
                this.setState({ themeColor: 'green' });
                break;
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.name === '' || this.state.name.length >= 20 || !this.state.name.match(/^[a-zA-Z0-9]+$/)) {
            this.setState({ emptyName: true });
        } else {
            this.props.onUserSubmit(this.state.name, this.state.themeColor);
        }

    }
    handleChange(e) {
        this.setState({ name: e.target.value });
    }
    render() {
        return (
            <div className={styles.Welcome}>
                <form className={styles.UserForm} onSubmit={e => this.handleSubmit(e)}>
                    <input
                        className={styles.UserInput}
                        placeholder='Choose your nickname'
                        onChange={e => this.handleChange(e)}
                        value={this.state.name}
                    />
                </form>
                <p className={styles.EmptyName}>{this.state.emptyName ? 'Nick must be 1 - 20 chars long and consist of only letter and/or numbers' : ''}</p>
                <p className={styles.ThemesTitle}>Choose theme</p>
                <div className={styles.Themes}>
                    <button className={this.state.themeColor === 'blue' ? styles.ThemeBlueSelected : styles.ThemeBlue} onClick={() => this.chooseTheme('blue')}></button>
                    <button className={this.state.themeColor === 'red' ? styles.ThemeRedSelected : styles.ThemeRed} onClick={() => this.chooseTheme('red')}></button>
                    <button className={this.state.themeColor === 'green' ? styles.ThemeGreenSelected : styles.ThemeGreen} onClick={() => this.chooseTheme('green')}></button>
                </div>
            </div>
        )
    }
}

export default UserForm; 