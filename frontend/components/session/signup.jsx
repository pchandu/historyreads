import React from 'react'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.currentTarget.value })
        }
    }

     componentDidMount() {
        document.addEventListener("click", this.props.clearErrors())
     }
     
    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
        .then( () => this.props.history.push('/'))
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
        return(
            <div className="signup-form">
                <h2> New here? Create a free account! </h2>
                <form>
                    {this.renderErrors()}
                    <label>Username: 
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    
                    <label>Email: 
                        <input 
                            type="email"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}


export default Signup