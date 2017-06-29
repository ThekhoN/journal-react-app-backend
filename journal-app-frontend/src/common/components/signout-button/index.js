import React from 'react';
import {NavLink} from 'react-router-dom';

const SignoutButton = () => (
  <NavLink exact to='/signout' >sign out</NavLink>
);

export default SignoutButton;
