import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Cart from "./components/Cart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    };
  }
  addToCart = (product) => {
    let cartItems = this.state.cartItems.slice();
    let isExist = false;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === product.id) {
        cartItems[i].qty += 1;
        isExist = true;
      }
    }
    if (!isExist) {
      cartItems.push({ ...product, qty: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  removeFromCart = (product) => {
    let cartItems = this.state.cartItems.slice();
    let newcart = [];
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id !== product.id) {
        newcart.push(cartItems[i]);
      }
    }
    this.setState({ cartItems: newcart });
  };
  render() {
    const { products, cartItems } = this.state;
    return (
      <div>
        <p>Có tất cả {products.length} sản phẩm trong cửa hàng</p>
        <div className="row">
          <Products products={products} addToCart={this.addToCart} />
        </div>
        <div className="sidebar">
          <div className="title-cart"></div>
          <Cart cartItems={cartItems} removeFromCart={this.removeFromCart} />
        </div>
      </div>
    );
  }
}

export default App;
