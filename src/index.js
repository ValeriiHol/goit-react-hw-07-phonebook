import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// npm install @reduxjs/toolkit
// npm install react-redux
// npm install @reduxjs/toolkit react-redux  ???
// npm i redux-persist
