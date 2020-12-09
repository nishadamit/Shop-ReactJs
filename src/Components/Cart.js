import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions/index';
import {Container,Row,Col,Card,Button} from 'react-bootstrap';

class Cart extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            //  products:props.products.productInCart
        }
    }
    

    render() {

        //   const { products } = this.state;

          console.log("this props",this.props)

        if(this.props.products.productInCart.length !== 0 ){
            return(
                <Container className="cart1" >
                <Row className="mb-1" >
                    <h1>Your Cart:</h1>
                
                    {
                        this.props.products.productInCart.map((item,index) =>{
                            return(
                                <Col sm={12} md={12} className="mt-2" key={index} >
                                    <Card style={{ width: '50%',height:'30rem' }} >
                                    <Card.Img variant="top" src={item.image} width="100" height="300" />
                                    <Card.Body>
                                    <Card.Title>{'$' + item.price}</Card.Title>
                                    <Card.Title>{item.title}</Card.Title>
                                        {/* <Card.Text>
                                            {item.description}
                                        </Card.Text> */}
                                       <Button variant="primary" onClick={() => this.props.removeFromCart(item)}>Remove From Cart</Button>
                                    </Card.Body>
                                    </Card>
                                    </Col>
                                    )
                                })
                            } 
                        </Row>
                </Container>
            )
        }else{
            return (
                <div className="cart" >
                    <h1>Cart Is empty....</h1>
                </div>
             )
        }
    }
}


const mapStateToProps = (state) =>{
    // console.log("state in ccart",state)
    return{
        products : state.product
    }
} 

const mapDispatchToProps ={
          removeFromCart
}


export default connect(mapStateToProps,mapDispatchToProps)(Cart)
