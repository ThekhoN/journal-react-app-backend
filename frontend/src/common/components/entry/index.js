import React from 'react';
import EntryDate from '../entry-date';
import EntryText from '../entry-text';
import EntryAuthor from '../entry-author';

const Entry = ({data}) => (
  <div className='entry'>
    <h3>An Entry</h3>
    <EntryAuthor author={data.author} />
    <EntryDate date={data.updated} />
    <EntryText text={data.text} />
  </div>
);

export default Entry;
