import { ReactComponent as Logo } from '../assets/icons/logo.svg';
import { ReactComponent as Cart } from '../assets/icons/cart.svg';
import { ReactComponent as Magnify } from '../assets/icons/magnify.svg';
import Nav from './Nav';

export default function Header({ toggleCart, cartItems }) {
  const computeAmount = () => {
    return 'hello';
  };
  return (
    <header>
      <div className="container"></div>
    </header>
  );
}
