import React from 'react';
import {NavLink} from 'react-router-dom';

const SignupButton = () => (
  <span>
    <NavLink exact to='/signup' >sign up</NavLink>
  </span>
);

export default SignupButton;
