import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', 
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/'))
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    };

    render () {
        return (
            <div className="login-form">
                <h2>Welcome back! Please log in</h2>
                <form>
                    {this.renderErrors()}
                    <label> Username:
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>

                    <label> Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login