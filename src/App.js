import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import {Login} from "./components/Login";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {TodoApp} from "./TodoApp";

class App extends Component {



    render() {
      return (
          <Router>
              <div className="App">
                  <header className="App-header">
                      <img src={logo} className="App-logo" alt="logo"/>
                      <h1 className="App-title">TODO React App</h1>
                  </header>

                  <br/>
                  <br/>

                  <ul>
                  <form className="form">
                      <li><Link to="/components/Login">Login</Link></li>
                  </form>
                      <br/>
                      <br/>
                  <form className="form">
                      <li><Link to="/todo">Todo</Link></li>
                  </form>
                  </ul>

                  <div>
                      <Route exact path="/components/Login" component={Login}/>
                      <Route path="/todo" component={TodoApp}/>
                  </div>
              </div>
          </Router>
      );
    }

}

export default App;
