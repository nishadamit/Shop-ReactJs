import React, { Component } from 'react';
import {Container,Row,Col,Card,Button,Form} from 'react-bootstrap';

class Loginform extends Component {

    render() {
        return (
            <Container className="loginform-container" >
                 <Form  className="loginform" >
                 <h1>Login</h1>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Login</Button>
                   </Form>           
            </Container>
        )
    }
}

export default Loginform
