import React, {Component} from 'react';
import {connect} from 'react-redux';
import JournalEntries from '../journal-entries';
import Header from '../header';
import {Redirect} from 'react-router-dom';

const UnAuthd = () => (<h2>UnAuth'd redirect. . .</h2>);

class AuthdLandingComponent extends Component {
  render () {
    const {authenticated} = this.props;
    if (authenticated) {
      console.log('is authd. . .');
      return (
        <div>
          {/* <h2>Test Application</h2><br /> */}
          <Header />
          <JournalEntries />
        </div>
      );
    } else {
      console.log('NOT authd. . ., we should redirect. . .');
      return (<Redirect to='/' />);
      // return (<UnAuthd />);
    }
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapStateToProps, null)(AuthdLandingComponent);
