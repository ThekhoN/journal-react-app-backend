import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
  render () {
    const {authenticated} = this.props;
    return (
      <div className='header'>
        <nav>
          <NavLink key='0' exact to='/' activeClassName='active'>home</NavLink>
          <NavLink key='1' exact to='/signout' >sign out</NavLink>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  };
};
export default connect(mapStateToProps, null)(Header);
