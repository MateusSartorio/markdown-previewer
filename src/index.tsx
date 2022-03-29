// Importing default React stuff
import React from 'react';
import ReactDOM from 'react-dom';

// Importing custom components
import App from './App';

// Importing Redux stuff
import { createStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { rootReducer } from './reducers/rootReducer';

// import { store } from './app/store';
// import * as serviceWorker from './serviceWorker';

// Importing CSS stylesheet
import "./styles.css";

// Creating the store
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);