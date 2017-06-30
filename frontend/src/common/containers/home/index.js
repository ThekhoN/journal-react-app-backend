import React, {Component} from 'react';
import JournalEntries from '../journal-entries';
import Header from '../header';
import UnAuthLandingComponent from '../../components/unauth-landing-component';

class Home extends Component {
  constructor (props) {
    super(props);
    this.renderHomeComponent = this.renderHomeComponent.bind(this);
  }
  renderHomeComponent () {
    const {authenticated} = this.props;
    if (authenticated) {
      return (
        <div>
          <h2>Test Application</h2><br />
          <Header />
          <JournalEntries />
        </div>
      );
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

export default Home;
