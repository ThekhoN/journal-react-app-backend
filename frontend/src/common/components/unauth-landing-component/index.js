import React from 'react';
import SigninButton from '../signin-button';
import SignupButton from '../signup-button';
import Signin from '../../containers/signin';

const UnAuthLandingComponent = () => (
  <div className='unath-landing'>
    <h2>Test Application</h2>
    <Signin />
    <br />
    <SignupButton />
  </div>
);

export default UnAuthLandingComponent;
