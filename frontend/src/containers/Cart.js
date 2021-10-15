import React from 'react';
import CartItem from '../components/CartItem';
import './Cart.css';
import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// // Actions
// import { addToCart, removeFromCart } from "../redux/actions/cartActions";

// const CartScreen = () => {
//   const dispatch = useDispatch();

//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;

//   useEffect(() => {}, []);

//   const qtyChangeHandler = (id, qty) => {
//     dispatch(addToCart(id, qty));
//   };

//   const removeFromCartHandler = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const getCartCount = () => {
//     return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
//   };

//   const getCartSubTotal = () => {
//     return cartItems
//       .reduce((price, item) => price + item.price * item.qty, 0)
//       .toFixed(2);
//   };

//   return (
//     <>
//       <div className="cartscreen">
//         <div className="cartscreen__left">
//           <h2>Shopping Cart</h2>

//           {cartItems.length === 0 ? (
//             <div>
//               Your Cart Is Empty <Link to="/">Go Back</Link>
//             </div>
//           ) : (
//             cartItems.map((item) => (
//               <CartItem
//                 key={item.product}
//                 item={item}
//                 qtyChangeHandler={qtyChangeHandler}
//                 removeHandler={removeFromCartHandler}
//               />
//             ))
//           )}
//         </div>

//         <div className="cartscreen__right">
//           <div className="cartscreen__info">
//             <p>Subtotal ({getCartCount()}) items</p>
//             <p>${getCartSubTotal()}</p>
//           </div>
//           <div>
//             <button>Proceed To Checkout</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CartScreen;

const Cart = () => {
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Carrito de Compras</h2>
                <CartItem />
                <div>
                Su carrito esta vacio <Link to="/">Volver</Link>
                </div>
            </div>

            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal(0) Articulos</p>
                    <p>$500</p>
                </div>
                <div>
                    <button>Realizar el Pago</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
