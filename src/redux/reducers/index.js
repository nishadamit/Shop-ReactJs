import { combineReducers  } from 'redux';

const initialState= {
        productInCart:[]
}

const cartReducer = (state = initialState,action) =>{
        //   console.log("action payload",action.payload)
           switch(action.type){
               case 'ADD_TO_CART':
                   return{
                    productInCart:[...state.productInCart,action.payload]
                   }
              case 'REMOVE_FROM_CART':
                    return{ 
                     productInCart:[...state.productInCart.filter((item) => item !== action.payload )]
                    }
           }
           return state;
}


export default combineReducers({
    product:cartReducer
})