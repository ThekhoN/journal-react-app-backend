import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './style.css';
import data from '../data';
import Home from './home';
import Header from './header';
import About from '../components/about';
import AuthdLandingComponent from './authd-landing-component';
import configureStore from '../store/configureStore';
import {AUTH_USER} from '../actions/types';

// on the front-end if authd update store to authenticated: true
// if (window) {
//   const token = window.localStorage.getItem('token');
//   console.log('token: ', token);
//   const store = configureStore();
//   if (token) {
//     store.dispatch({
//       type: AUTH_USER
//     });
//   }
// }

const App = () => (
  <div className='react-app'>
    <Route exact path='/' component={Home} />
    <Route exact path='/journal' component={AuthdLandingComponent} />
    <Route exact path='/about' component={About} />
  </div>
);

export default App;
