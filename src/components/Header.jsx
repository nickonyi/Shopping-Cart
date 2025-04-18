import Logo from '../assets/icons/logo.svg?react';
import Cart from '../assets/icons/cart.svg?react';
import Hamburger from '../assets/icons/bars-solid.svg?react';
import Magnify from '../assets/icons/magnify.svg?react';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';

export default function Header({
  toggleCart,
  cartItems,
  menuOpen,
  handleToggle,
}) {
  const computeAmount = () => {
    return cartItems.reduce(
      (currentAmount, item) => currentAmount + item.amount,
      0
    );
  };

  return (
    <header>
      <div className="container">
        <NavLink to="">
          <Logo className="logo-icon icon" />
        </NavLink>
      </div>
      <div className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
        <Nav />
        <div
          className={`container cart-container gap ${menuOpen ? 'open' : ''}`}
        >
          <div className="cart-icon" onClick={toggleCart}>
            <Cart className="icon" />
            <div className="cart-amount">{computeAmount()}</div>
          </div>
          <Magnify className="icon magnif" />
          <button className="btn">Log in</button>
        </div>
      </div>
      <button className="hamburger" onClick={handleToggle}>
        <Hamburger className="burger" />
      </button>
    </header>
  );
}
