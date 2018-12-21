import React, { Component } from 'react';
import './assets/css/index.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/content/:id" component={Content} />
        </div>
      </Router>
    );
  }
}

export default App;
