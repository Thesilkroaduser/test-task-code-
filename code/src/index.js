import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode> 
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

reportWebVitals();
