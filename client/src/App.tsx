import React, { Component } from 'react';
import './App.css';
import Header from './header';

class App extends Component {

  state = { counter: [] as string[] }

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
      <div className="App m-2">
        <Header />
        <div className='grid space-y-4 break-all'>
          {this.state.counter}
        </div>
      </div>
    );
  }
}

export default App;
