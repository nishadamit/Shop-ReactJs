import React, { Component } from 'react';
import {Container,Row,Col,Card,Button,Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import firebase from './firebase';
require('firebase/auth')


class Loginform extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }


    handleChange =(e) =>{
        e.preventDefault();

        this.setState({[e.target.name]:e.target.value})
    }

    handleOnSubmit =(e) =>{
        e.preventDefault();
        const { email, password } = this.state;
     firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((user) => {
            console.log("login successful",user)
            localStorage.setItem('user', user);
            this.props.history.push('/cart');
          })
          .catch((error) => {
              console.log("error",error)
            this.setState({ error: error });
          });
    }
    

    render() {

        // console.log("state",this.state)

        return (
            <Container className="loginform-container" >
                 <Form  className="loginform" onSubmit={(e) =>this.handleOnSubmit(e)} >
                 <h1>Login</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" onChange={(e) => this.handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password"  onChange={(e) => this.handleChange(e)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleOnClick} >Login</Button>
                    <Link to="signup" >Click here to SignUp</Link>
                   </Form>           
            </Container>
        )
    }
}

export default Loginform
