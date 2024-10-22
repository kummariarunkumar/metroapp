import '../Styles/Login.css';
import Axios from 'axios';
import React, { Component } from 'react';
import Navbar from './Navbar';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      users: [],
      errorMessage: '' 
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {

    e.preventDefault();

    this.setState({ errorMessage: '' });

    Axios.get('http://localhost:3200/users')
      .then((res) => {
        const users = res.data;

        const user = users.find(
          (user) =>
            user.username === this.state.username &&
            user.password === this.state.password
        );

        if (user) {
          alert('Login successfully');
          window.location='/dashboard'
          
        } else {
          this.setState({ errorMessage: 'Invalid username or password' });
        }
      })
      .catch((err) => {
        console.error('Error fetching user data:', err);
        this.setState({ errorMessage: 'Error fetching user data' });
      });
  };

  render() {
    return (
        <>
        <Navbar/>
          
        <div className='login-container'>
      <div className="container">
        <div className="alert alert-primary">
          <h1>Login Here</h1>
        </div>
        <form className="container" onSubmit={this.submitHandler}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                placeholder="Enter user name"
                name="username"
                value={this.state.username} 
                onChange={this.changeHandler}
                className="form-control"
              />
            </div>
            <div className="col">
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={this.state.password} 
                onChange={this.changeHandler}
                className="form-control"
              />
            </div>
          </div>

          {this.state.errorMessage && (
            <div className="row mt-3">
              <div className="col">
                <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
              </div>
            </div>
          )}

          <div className="row mt-3">
            <div className="col">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
      </>
    );
  }
}

export default Login;