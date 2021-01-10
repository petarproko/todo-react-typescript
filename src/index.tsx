import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement: HTMLElement | null = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App rootElement={rootElement}/>
  </React.StrictMode>,
  rootElement
);

reportWebVitals();
