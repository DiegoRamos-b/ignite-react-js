import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createServer, Model } from 'miragejs';
import { GlobalStyle } from './styles/global';


createServer({
  models: {
    transactions: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'freelancer de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          date: new Date(),
        },
        {
          id: 2,
          title: 'Compra do mes',
          type: 'withdrawal',
          category: 'gasto mensal',
          amount: 300,
          date: new Date(),
        }
      ]
    });
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => this.schema.all('transactions'))

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transactions', data);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
