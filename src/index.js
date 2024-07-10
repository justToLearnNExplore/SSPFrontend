// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GameContextProvider from './Context/GameContext';

import { Provider } from 'react-redux';
import { reducers} from './redux/reducers'
import { thunk } from 'redux-thunk';
import { createStore, applyMiddleware, compose} from 'redux';

import { GoogleOAuthProvider } from '@react-oauth/google';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk))) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <GameContextProvider>
        <App />
      </GameContextProvider>
      </GoogleOAuthProvider>
    </Provider>
  
);
