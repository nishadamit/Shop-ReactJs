import React, { Component } from 'react';
import {Container,Row,Col,Card,Button,Form} from 'react-bootstrap';
import firebase from './firebase';
require('firebase/auth')


class SignUpForm extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
             error:''
        }
    }


    handleChange =(e) =>{
        e.preventDefault();

        this.setState({[e.target.name]:e.target.value})
    }

    handleOnSubmit =(e) =>{
        e.preventDefault();
        // console.log("state in click",this.state)


        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
             .then((user) => {
                 console.log("sign up successfull")
                console.log("user",user)
               this.props.history.push('/login');
             })
             .catch((error) => {
               this.setState({ error: error });
             });
    }

    render() {
        return (
            <Container className="loginform-container" >
                 <Form  className="loginform" onSubmit={(e) =>this.handleOnSubmit(e)} >
                 <h1>SignUp</h1>
                 <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" onChange={(e) => this.handleChange(e)} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password"  onChange={(e) => this.handleChange(e)} />
                    </Form.Group>
                    <Button variant="primary" type="submit"  >SignUp</Button>
                   </Form>           
            </Container>
        )
    }
}

export default SignUpForm
