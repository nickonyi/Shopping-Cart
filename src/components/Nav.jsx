import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="container nav gap">
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
      <NavLink className="nav-item" to="#/contact">
        Contacts
      </NavLink>
    </nav>
  );
}

export default Nav;
