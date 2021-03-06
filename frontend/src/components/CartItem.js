import React from 'react';
import './CartItem.css'
import { Link } from "react-router-dom";

// const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
//   return (
//     <div className="cartitem">
//       <div className="cartitem__image">
//         <img src={item.imageUrl} alt={item.name} />
//       </div>
//       <Link to={`/product/${item.product}`} className="cartItem__name">
//         <p>{item.name}</p>
//       </Link>
//       <p className="cartitem__price">${item.price}</p>
//       <select
//         value={item.qty}
//         onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
//         className="cartItem__select"
//       >
//         {[...Array(item.countInStock).keys()].map((x) => (
//           <option key={x + 1} value={x + 1}>
//             {x + 1}
//           </option>
//         ))}
//       </select>
//       <button
//         className="cartItem__deleteBtn"
//         onClick={() => removeHandler(item.product)}
//       >
//         <i className="fas fa-trash"></i>
//       </button>
//     </div>
//   );
// };

// export default CartItem;

const CartItem = () => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"
                alt="producto name"/>
            </div>

            <Link to={`/product/${111}`} className="cartItem__name">
                <p>Celular iphon</p>
            </Link>

            <p className="cartitem__price">$500</p>
            
            <select className="cartitem__select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <button>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default CartItem
