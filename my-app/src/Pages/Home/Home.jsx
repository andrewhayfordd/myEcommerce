import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import "../Home/Home.css";
import banner from "../../Assets/images/banner.png";
import products from "../../products";
import Cart from "../../Components/Cart/Cart";
import Drawer from "@mui/material/Drawer";
import { useCart } from "../../Components/CartProvider/CartProvider";

function Home() {
  const { cart, removeFromCart } = useCart();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const viewProduct = (product) => {
    navigate(`/product/${product.id}`);
    setTimeout(() => {
      window.scrollTo(0, 0);
      console.log("page to reload");
    }, 0);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const latest = products.slice(-4);

  return (
    <div className="Home">
      <Header cartCount={cart.length} onBagClick={toggleDrawer(true)} />

      <div className="hero">
        <div className="texts">
          <div className="text1">ROBERTA'S SUMMER</div>
          <div className="text2">COLLECTION 2024</div>
          <div className="text3">
            khkhf bvs dkhb vkhbv dkhsvb khs hbhv sbvbhd ksfh kshbf kss su kshv
            ksfv
          </div>
          <div className="btn">
            <button>Shop Now</button>
          </div>
        </div>

        <div className="img">
          <img src={banner} alt="" />
        </div>
      </div>

      <div className="latest">
        LATEST <span>ARRIVALS</span>
      </div>
      <div className="products">
        {latest.map((product) => (
          <div
            className="product"
            key={product.id}
            onClick={() => viewProduct(product)}
          >
            <li>
              <div className="img">
                <img src={product.image} alt="" />
              </div>
              <div className="h2">{product.name}</div>
              <div className="p">${product.price}</div>
            </li>
          </div>
        ))}
      </div>

      <div className="head">
        <h1>Best Seller Products</h1>
        <div>Shop With Us</div>
      </div>

      <div className="products">
        {products.map((product) => (
          <div
            className="product"
            key={product.id}
            onClick={() => viewProduct(product)}
          >
            <li>
              <div className="img">
                <img src={product.image} alt="" />
              </div>
              <div className="h2">{product.name}</div>
              <div className="p">${product.price}</div>
            </li>
          </div>
        ))}
      </div>

      <div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Cart cart={cart} removeFromCart={removeFromCart} onClose={toggleDrawer(false)} />
        </Drawer>
      </div>
    </div>
  );
}

export default Home;
