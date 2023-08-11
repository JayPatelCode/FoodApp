import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem.js";
import { clearCart } from "../utils/cartSlice.js";



const Cart= ()=>{
    const cartItems= useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());


    }
    
    return ( 
        //  <div className="newCart">
        
         <div style={{marginTop:"100px"}} className="restaurant-list">

         <h1>Cart Items- {cartItems.length}</h1>
<button className="clear-btn" onClick={()=>handleClearCart()}>Clear Cart</button>

         {cartItems.map((item)=><FoodItem key={item.id} {...item}/>)}
          
    </div>
    );
}
export default Cart;















