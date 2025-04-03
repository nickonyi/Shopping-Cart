import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function RootLayout() {
  const [cartStatus, setCartStatus] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    if (!cartStatus) {
      setCartStatus(true);
    } else {
      setCartStatus(false);
    }
  };

  const addItem = (title, price, amount, image) => {};
  return (
    <>
      <Header toggleCart={toggleCart} cartItems={cartItems} />
      <Outlet />
      {/* <Cart /> */}
      <Footer />
    </>
  );
}
