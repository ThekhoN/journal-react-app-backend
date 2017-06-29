import React from 'react';
import {Route} from 'react-router-dom';
import './style.css';
import data from '../data';
import Home from './home';
import Header from './header';
import About from '../components/about';
// const App = () => (
//   <div className='react-app'>
//     <Nav />
//     <Route exact path='/' component={routerComponentWrapperHOC(HomePage)} />
//     <Route exact path='/counter' component={routerComponentWrapperHOC(CounterContainer)} />
//   </div>
// );

const App = () => (
  <div className='react-app'>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
  </div>
);

export default App;
