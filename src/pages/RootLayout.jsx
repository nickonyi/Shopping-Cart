import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function RootLayout() {
  const [cartStatus, setCartStatus] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleCart = () => {
    if (!cartStatus) {
      setCartStatus(true);
    } else {
      setCartStatus(false);
    }
  };
  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const addItem = (title, price, amount, image) => {
    const existingItem = cartItems.findIndex((item) => item.title === title);

    if (existingItem !== -1) {
      const newAmount = cartItems[existingItem].amount + amount;
      setCartItems((prevState) => {
        prevState[existingItem].amount = newAmount;
        return [...prevState];
      });
    } else {
      const newItem = { title, price, amount, image };
      setCartItems((prevState) => [...prevState, newItem]);
    }
  };
  return (
    <>
      <Header
        toggleCart={toggleCart}
        cartItems={cartItems}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        handleToggle={handleToggle}
      />
      <Outlet context={{ addItem }} />
      <Cart
        status={cartStatus}
        closeCart={toggleCart}
        items={cartItems}
        setCartItems={setCartItems}
        handleToggle={handleToggle}
      />
      <Footer />
    </>
  );
}
