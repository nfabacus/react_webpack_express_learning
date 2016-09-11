import React, { Component } from 'react';
import 'whatwg-fetch';

class Form extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.state = {
      username: '',
      signupMessage: ''
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    var _this = this;
    e.preventDefault();
    fetch('/api/signup', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({username: this.state.username})
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      _this.setState({
        signupMessage: response.message
      });

      window.location.href = '/';
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.signupMessage ? this.state.signupMessage : null}
        <label>Username</label>
        <input type='text' value={this.state.username} onChange={this.onChangeUsername}/>
        <button type='submit'>Go!</button>
      </form>
    );
  }
}

export default Form;