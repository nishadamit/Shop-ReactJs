import React from 'react';
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import { FaFacebook,FaGoogle,FaTwitter,FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
         <Container fluid className="footer" >
             <Row>
                 <Col sm={12} md={6}>
                    <ul>
                        <li>Terms and Conditions</li>
                        <li>FAQs</li>
                    </ul>
                 </Col>
                 <Col sm={12} md={6}>
                    <ul>
                         <li><FaFacebook size='2rem' color="white" /></li>
                         <li><FaTwitter  size='2rem' color="white" /></li>
                         <li><FaGoogle   size='2rem' color="white" /></li>
                         <li><FaYoutube  size='2rem' color="white" /></li>
                    </ul>
                 </Col>
             </Row>
         </Container>
    )
}

export default Footer
