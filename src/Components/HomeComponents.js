import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {Container,Row,Col,Card,Button} from 'react-bootstrap';
import { addToCart } from '../redux/actions/index';



class HomeComponents extends Component {


    state={
        products:[]
    }

    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
             .then((response) =>{
                   this.setState({products:response.data})
             })
    }
    
    render() {
        // console.log("products",this.state.products)

        console.log("env file",process.env.REACT_APP_AUTHDOMAIN )

        console.log("props",this.props)

        const { products } = this.state
        if(products.length !==0 ){
        return (
            <Container className="home" >
                <Row className="mb-1" >
                  
                    {
                        products.map((item,index) =>{
                               return(
                                <Col sm={12} md={4} className="mt-2" key={index} >
                                    <Card style={{ width: '22rem',height:'30rem' }} >
                                    <Card.Img variant="top" src={item.image} width="100" height="300" />
                                    <Card.Body>
                                    <Card.Title>{'$' + item.price}</Card.Title>
                                    <Card.Title>{item.title}</Card.Title>
                                        {/* <Card.Text>
                                            {item.description}
                                        </Card.Text> */}
                                        <Button variant="primary" onClick={() => this.props.addToCart(item)}>Add To Cart</Button>
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
         return(
            <div className="loading" >
                     <div className="loading-inner" >
                                 loading
                     </div>
            </div>
         )
        
    }
     }
    }

const mapStateToProps = (state) =>{
    console.log("state gggg",state)
    return {

    }
} 

const mapDispatchToProps ={
          addToCart,
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeComponents)
