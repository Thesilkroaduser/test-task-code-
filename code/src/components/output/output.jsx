import React from 'react';
import './output.scss';
import { useSelector, shallowEqual } from 'react-redux';

function Output() {

  const data = useSelector(state => state.data, shallowEqual);
  const listItems = data.map((item, index) =>
    <li className="list-item" key={`${index}`}>{item}</li>
  );

  return (
    <div className="output">
      <h2 className="subtitle">Output</h2>
      {/* <p>{data.length ? data : 'OUTPUT IS EMPTY'}</p> */}
      <ul className="list">{listItems}</ul>
    </div>
  )
}

export default Output;