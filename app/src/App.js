import React, { Component } from 'react';
import axios from 'axios';

import FoodList from './FoodList';
import Footer from './Footer';

import './App.css';
import './custom.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Food List <span role="img" aria-label="yummy-face">😋</span></h1>

        <FoodList/>

        </header>
        <Footer/>
      </div>
    );
  }
}

export default App;
