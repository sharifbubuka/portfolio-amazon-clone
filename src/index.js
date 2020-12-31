import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initialState, reducer } from './reducer'
import {StateProvider} from './StateProvider'
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


