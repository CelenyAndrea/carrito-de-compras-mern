import React from 'react'
import "./Product.css";
import { Link } from "react-router-dom";

// const Product = ({ imageUrl, description, price, name, productId }) => {
//   return (
//     <div className="product">
//       <img src={imageUrl} alt={name} />

//       <div className="product__info">
//         <p className="info__name">{name}</p>

//         <p className="info__description">{description.substring(0, 100)}...</p>

//         <p className="info__price">${price}</p>

//         <Link to={`/product/${productId}`} className="info__button">
//           View
//         </Link>
//       </div>
//     </div>
//   );
// };

const Product = () => {
  return (
    <div className="product">
      <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
      alt="product name"/>

      <div className="product__info">
        <p className="info__name">Play Station</p>

        <p className="info__description">
          kjfsljfslfsfjlfjfkjflfjlfjldjfdjflsjfs
        </p>

        <p className="info__price">$500</p>

        <Link to={`/product/${111}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;