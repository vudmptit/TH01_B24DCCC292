import React, { useState } from "react";

const CartApp = ({ initialItems }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exist = cart.find(i => i.id === item.id);
    if (exist) {
      setCart(cart.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i));
    } else {
      setCart([...cart, {...item, quantity: 1}]);
    }
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      <h2>Bài 3: Giỏ hàng</h2>
      <h3>Sản phẩm</h3>
      {initialItems.map(item => (
        <div key={item.id}>
          {item.name} - {item.price}₫
          <button onClick={() => addToCart(item)}>Thêm vào giỏ</button>
        </div>
      ))}
      <h3>Giỏ hàng</h3>
      {cart.map(i => (
        <div key={i.id}>{i.name} x {i.quantity}</div>
      ))}
      <div>Tổng tiền: {total}₫</div>
    </div>
  );
};

export default CartApp;