import Logo from '../assets/icons/logo.svg?react';
import Cart from '../assets/icons/cart.svg?react';
import Magnify from '../assets/icons/magnify.svg?react';
import Nav from './Nav';
import { useState } from 'react';

export default function Header({ toggleCart, cartItems }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const computeAmount = () => {
    return cartItems.reduce(
      (currentAmount, item) => currentAmount + item.amount,
      0
    );
  };

  const handleToggle = () => {
    console.log('yolo');

    setMenuOpen((prev) => !prev);
  };
  return (
    <header>
      <div className="container">
        <Logo className="logo-icon icon" />
      </div>
      <div className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
        <Nav />
      </div>
      <div className="container gap">
        <div className="cart-icon" onClick={toggleCart}>
          <Cart className="icon" />
          <div className="cart-amount">{computeAmount()}</div>
        </div>
        <Magnify className="icon" />
        <button className="btn">Log in</button>
      </div>

      <button className="hamburger" onClick={handleToggle}>
        &#9776;
      </button>
    </header>
  );
}
