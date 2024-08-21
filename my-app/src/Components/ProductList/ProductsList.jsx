import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <img src={product.image} alt={product.name} style={{ width: "100px" }} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;