import React, {Component} from 'react';
import Entry from '../../components/entry';
import {connect} from 'react-redux';

// const JournalEntries = ({data}) => {
//   console.log('data: ', data);
//   return (
//     <div>
//       {data.map(d => <Entry
//         key={d._id}
//         data={d} />)}
//     </div>
//   );
// };

class JournalEntries extends Component {
  render () {
    const {entries} = this.props;
    return (
      <div className='journal-entries'>
        {entries.map(d => <Entry
          key={d._id}
          data={d} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entries: state.entries
});
export default connect(mapStateToProps, null)(JournalEntries);
// export default JournalEntries;
