import React from "react";
import formatNumberToVND from "../Utils";

class Cart extends React.Component {
  render() {
    const { cartItems, removeFromCart } = this.props;
    return (
      <div className="container-cart">
        <div className="center-cart">
          <div className="title-cart">
            <h1>Giỏ hàng</h1>
            <p>Giỏ hàng của bạn đang có {cartItems.length} sản phẩm</p>
          </div>
          <table className="table-cart" border="1">
            <thead>
              <tr>
                <th>Xóa</th>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá tiền</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr>
                  <td>
                    <button onClick={() => removeFromCart(item)}>Xóa</button>
                  </td>
                  <td>
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      width="100"
                      height="90"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>
                    {item.price} x {item.qty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {cartItems.length !== 0 && (
            <div className="total">
              <p>
                <strong>Tổng tiền thanh toán:</strong>
                {formatNumberToVND(
                  cartItems.reduce(
                    (sum, value) => sum + value.price * value.qty,
                    0
                  )
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
