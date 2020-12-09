import React, { Component } from 'react';
import { Button, Navbar ,NavDropdown,Nav,Form,FormControl} from 'react-bootstrap';
import { FaBeer,FaUser,FaShoppingBasket } from 'react-icons/fa';
import { connect } from 'react-redux';
import logo from '../Assets/image/logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        console.log("header data",this.props.products.productInCart)
        return (
            <div>
                <Navbar className="header" expand="lg">
                   <Link to="/" > <Navbar.Brand  className="logo" >
                    <img
                        src= {logo}
                        width="40"
                        height="40"
                    />
                    Shop
                    </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Link to="/login"><FaUser size='2rem' color="white" /></Link>
        <Link to="/cart" ><FaShoppingBasket  size='2rem' color="white" /><span className="counter" >{ this.props.products.productInCart.length ? `(${this.props.products.productInCart.length})` :''  }</span></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    // console.log("state in ccart",state)
    return{
        products : state.product
    }
} 

export default connect(mapStateToProps,null)(Header)
