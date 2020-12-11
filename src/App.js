
import React, { Component } from 'react';
import Header from './Components/Header';
import './Assets/css/index.css';
import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom';
import HomeComponent from './Components/HomeComponents';
import LoginForm from './Components/Loginform';
import Footer from './Components/Footer';
import SignUpForm from './Components/SignUpForm';
import CartWrapper from './Components/CartWrapper';

class App extends Component {
  render() {
    return (
        <div>
           
            <Router>
            <Header />
                <Switch>
                  <Route exact path ='/' component={ HomeComponent } />
                  <Route exact path = '/login' component={ LoginForm } />
                  <Route exact path = '/signup' component={ SignUpForm } />
                  <Route exact path = '/cart' component={ CartWrapper } />
                  <Redirect to="/" />
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
  }
}

export default App
