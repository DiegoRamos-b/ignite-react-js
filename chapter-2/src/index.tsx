import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer } from 'miragejs';
import { GlobalStyle } from './styles/global';


createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => (
      [
        { 
          id: 1, 
          title: 'transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'food',
          date: new Date(),
        },
        { 
          id: 2, 
          title: 'transaction 2',
          amount: 600,
          type: 'deposit',
          category: 'car',
          date: new Date(),
        },
        { 
          id: 3, 
          title: 'transaction 3',
          amount: 500,
          type: 'deposit',
          category: 'food',
          date: new Date(),
        },
        { 
          id: 5, 
          title: 'transaction 5',
          amount: 400,
          type: 'deposit',
          category: 'food',
          date: new Date(),
        },
      ]
    ));
  }
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
