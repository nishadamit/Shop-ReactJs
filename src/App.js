
import React, { Component } from 'react';
import Header from './Components/Header';
import './Assets/css/index.css';
import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom';
import HomeComponent from './Components/HomeComponents';
import LoginForm from './Components/Loginform';
import Cart from './Components/Cart';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
        <div>
           
            <Router>
            <Header />
                <Switch>
                  <Route exact path ='/' component={ HomeComponent } />
                  <Route exact path = '/login' component={ LoginForm } />
                  <Route exact path = '/cart' component={ Cart } />
                  <Redirect to="/" />
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
  }
}

export default App
