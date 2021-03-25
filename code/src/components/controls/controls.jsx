import React, { useRef } from 'react';
import './controls.scss';
import { useDispatch } from 'react-redux';

function Controls() {

  const dispatch = useDispatch();
  const inputElement = useRef();
  let filter = '';

  const getDataFromServer = async () => {
    const proxyURL = "https://cors-anywhere.herokuapp.com/";
    const mainURL = 'http://www.mrsoft.by/data.json';
    const response = await fetch(proxyURL + mainURL);
    return response.json();
  };

  const getDataByLength = () => {
    filter = parseFloat(inputElement.current.value);
    inputElement.current.value = '';
    if (!isNaN(filter)) {
      getDataFromServer()
      .then(data => dispatch({ type: 'GET-BY-LENGTH', wordsArray: data.data, filter: filter }))
      .then(() => filter = '' );
      
    } else {
      dispatch({ type: 'ERROR' });
      setTimeout(() => { dispatch({ type: 'ERROR' })}, 600);
      filter = '';
      return;
    }
  }

  const getDataBySubstring = () => {
    filter = inputElement.current.value;
    inputElement.current.value = '';
    getDataFromServer()
    .then(data => dispatch({ type: 'GET-BY-SUBSTR', wordsArray: data.data, filter: filter }))
    .then(() => filter = '' );
  }

  const toggleCase = () => {
    return {
      type: 'TOGGLE'
    }
  }

  return (
    <div className="controls-wrapper">
      <form className="form">
        <h2 className="subtitle">input</h2>
        <div className="form-group">
          <input 
            ref={inputElement} 
            className="search" 
            type="text" />
          <div className="formItem-wrapper">
            <label className="field-name" htmlFor="textField" >
              Сase sensitive
            </label>
            <input 
              className="toggle-case" 
              type="checkbox" 
              id="textField" 
              onChange={() => {dispatch(toggleCase())}} >
            </input>
          </div>
          <button 
            onClick={(e) => {
              e.preventDefault();
              getDataByLength();
            }} 
            className="submit-button" 
            type="submit" >
            By word length
          </button>
          <button 
            onClick={(e) => {
              e.preventDefault();
              getDataBySubstring();
            }}  
            className="submit-button" 
            type="submit" >
            By substring
          </button>
        </div>
      </form>
    </div>
  );
}

export default Controls;