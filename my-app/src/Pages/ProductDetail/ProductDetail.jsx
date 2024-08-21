import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import products from "../../products";
import Cart from "../../Components/Cart/Cart";
import { Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Components/CartProvider/CartProvider";
import "../ProductDetail/ProductDetail.css";

function ProductDetail() {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart } = useCart();
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      // onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    // onChange(quantity + 1);
  };
  
  
  const viewProduct = (product) => {
    navigate(`/product/${product.id}`);
    setTimeout(() => {
      window.scrollTo(0, 0);
      console.log('page to reload')
  }, 0);
  };

  const first4 = products.slice(0, 4);

  return (
    <div className="ProductDetail">
      <Header cartCount={cart.length} onBagClick={toggleDrawer(true)}/>
      
      <div className="container">
      <div className="img"><img src={product.image} alt={product.name} /></div>
      <div className="info">
      <h2>{product.name}</h2>
      <div className="detail">Details:</div>
      <div className="description">{product.description}</div>
      <div className="price">${product.price}</div>

      <div className="number-input">
      <h4>Quantity:</h4>
      <button className="minus" onClick={handleDecrement}></button>
      <input
        type="number"
        className="quantity"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      <button className="plus" onClick={handleIncrement}></button>
      </div>
      <div className="btn"><button onClick={handleAddToCart}>Add to Cart</button></div>
    
      </div>
  
</div>

<div className="head">You May Also Like</div>

<div className="products">
        {first4.map((product) => (
          <div className="product" key={product.id} onClick={() => viewProduct(product)}>
            <li>
              <div className="img">
                <img src={product.image} alt="" />
              </div>
              <div className="h2">{product.name}</div>
              <div className="p">${product.price}</div>
              {/* <button onClick={() => viewProduct(product)}>View Details</button> */}
            </li>
          </div>
        ))}
      </div>


      <div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Cart cart={cart} removeFromCart={removeFromCart}/>
        </Drawer>
      </div>
    </div>
  );
}

export default ProductDetail;



