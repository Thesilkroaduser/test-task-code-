import React from 'react';
import './notification.scss';
import { useSelector, shallowEqual } from 'react-redux';

function Notification() {

  const error = useSelector(state => state.error, shallowEqual);

  if (error) {
    return (
      <p className="notification">Incorrect request</p>
    );
  }
  return null;
}

export default Notification;