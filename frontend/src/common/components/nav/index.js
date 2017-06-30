import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
  <nav>
    <NavLink exact to='/' activeClassName='active'>home</NavLink>
    <NavLink exact to='/about' activeClassName='active'>about</NavLink>
  </nav>
);

export default Nav;
