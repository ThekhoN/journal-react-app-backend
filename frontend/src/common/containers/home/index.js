import React, {Component} from 'react';
import JournalEntries from '../journal-entries';
import Header from '../header';
import UnAuthLandingComponent from '../../components/unauth-landing-component';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Home extends Component {
  constructor (props) {
    super(props);
    this.renderHomeComponent = this.renderHomeComponent.bind(this);
  }
  renderHomeComponent () {
    const {authenticated} = this.props;
    if (authenticated) {
      return (<Redirect to='/journal' />);
    } else {
      return (
        <UnAuthLandingComponent />
      );
    }
  }
  render () {
    return (
      <div className='home-wrapper'>
        {this.renderHomeComponent()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});
export default connect(mapStateToProps, null)(Home);
// export default Home;
