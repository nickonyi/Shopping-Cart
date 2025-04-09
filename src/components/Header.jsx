import Logo from '../assets/icons/logo.svg?react';
import Cart from '../assets/icons/cart.svg?react';
import Magnify from '../assets/icons/magnify.svg?react';
import Nav from './Nav';

export default function Header({ toggleCart, cartItems }) {
  const computeAmount = () => {
    return cartItems.reduce(
      (currentAmount, item) => currentAmount + item.amount,
      0
    );
  };
  return (
    <header>
      <div className="container">
        <Logo className="logo-icon icon" />
      </div>
      <Nav />
      <div className="container gap">
        <div className="cart-icon" onClick={toggleCart}>
          <Cart className="icon" />
          <div className="cart-amount">{computeAmount()}</div>
        </div>
        <Magnify className="icon" />
        <button className="btn">Log in</button>
      </div>

      <button className="hamburger" onClick={toggleCart}>
        &#9776;
      </button>
    </header>
  );
}
