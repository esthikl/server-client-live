import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {counter: [] as string[]}

  componentDidMount() {
    fetch('http://localhost:5000/')
      .then(res => {
        console.log(res);
        return res.json()
      })
      .then(counter => {
        console.log(counter);
        this.setState({ counter })
      });
  }

  render() {
    return (
      <div className="App">
        <h1>happyhippo</h1>
        {this.state.counter}
      </div>
    );
  }
}

export default App;
