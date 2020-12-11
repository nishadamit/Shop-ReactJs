import React, { Component } from 'react';
import { ThemeProvider } from 'react-bootstrap';

import Cart from './Cart';

var user = localStorage.getItem('user')

class CartWrapper extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            user:user
        }

        this.checkUser()
    }
    


    checkUser = () =>{

        console.log("check user called")

        if(localStorage.getItem('user') === 'false'){
            this.props.history.push('/login');
        }

        // if(this.state.flag === 'one'){
        //     this.props.history.push('/login');
        // }

        

        // console.log("this code execiuted")
        //       var user = localStorage.getItem('user')
        //       console.log("user",user)
        //       if(user == null){
                 
        //         this.props.history.push('/login');
        //       }
    }

    render() {
        return (
            <>
                <Cart/>
            </>         
        )
    }
}

export default CartWrapper
