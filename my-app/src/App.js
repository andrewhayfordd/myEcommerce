// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Home from './Pages/Home/Home';
// import Men from './Pages/Men/Men';
// import ProductDetail from './Pages/ProductDetail/ProductDetail';
// import { useState } from 'react';
// import { useEffect } from 'react';

// function App() {

//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     fetch("/products.json")
//       .then((response) => response.json())
//       .then((data) => setProducts(data));
//   }, []);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <div className="App">
//       <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Home/>}/>
//         <Route exact path="/men" element={<Men/>}/>
//         <Route path="/product/:productId" element={<ProductDetail />} />
//       </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { CartProvider } from "./Components/CartProvider/CartProvider";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

