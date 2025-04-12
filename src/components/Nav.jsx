import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="container nav gap mobile-nav">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'nav-item active' : 'nav-item'
        }
        to=""
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'nav-item active' : 'nav-item'
        }
        to="shop"
      >
        Shop
      </NavLink>
      <a className="nav-item" to="#">
        Contacts
      </a>
    </nav>
  );
}

export default Nav;
