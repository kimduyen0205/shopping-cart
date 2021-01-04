import React from "react";
import formatNumberToVND from "../Utils";

class Products extends React.Component {
  render() {
    const { products } = this.props;
    const { addToCart } = this.props;
    return (
      <div>
        {products.map((product) => (
          <div className="box">
            <img src={product.thumbnail} alt={product.name} />
            <div className="title">
              <h4>{product.name}</h4>
            </div>
            <div className="price">
              <p>{formatNumberToVND(product.price)}</p>
            </div>
            <div className="ship">
              <p>{product.ship}</p>
            </div>
            <div className="btn-buy">
              <button onClick={() => addToCart(product)}>+ Cho vào giỏ</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Products;
