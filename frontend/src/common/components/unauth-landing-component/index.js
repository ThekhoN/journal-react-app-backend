import React from 'react';
import SigninButton from '../signin-button';
import SignupButton from '../signup-button';

const UnAuthLandingComponent = () => (
  <div className='unath-landing'>
    <h2>Test Application</h2>
    <SigninButton />
    <br />
    <SignupButton />
  </div>
);

export default UnAuthLandingComponent;
