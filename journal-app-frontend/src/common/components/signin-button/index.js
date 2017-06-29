import React from 'react';
import {NavLink} from 'react-router-dom';

const SigninButton = () => (
  <span>
    <NavLink exact to='/signin' >sign in</NavLink>
  </span>
);

export default SigninButton;
