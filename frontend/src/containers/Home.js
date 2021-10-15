import React from 'react';
import Product from '../components/Product';
import "./Home.css";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// //Actions
// import { getProducts as listProducts } from "../redux/actions/productActions";

// const Home = () => {
//   const dispatch = useDispatch();

//   const getProducts = useSelector((state) => state.getProducts);
//   const { products, loading, error } = getProducts;

//   useEffect(() => {
//     dispatch(listProducts());
//   }, [dispatch]);

//   return (
//     <div className="homescreen">
//       <h2 className="homescreen__title">Latest Products</h2>
//       <div className="homescreen__products">
//         {loading ? (
//           <h2>Loading...</h2>
//         ) : error ? (
//           <h2>{error}</h2>
//         ) : (
//           products.map((product) => (
//             <Product
//               key={product._id}
//               name={product.name}
//               description={product.description}
//               price={product.price}
//               imageUrl={product.imageUrl}
//               productId={product._id}
//             />
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

const Home = () => {
    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Productos</h2>
            <div className="homescreen__products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default Home
