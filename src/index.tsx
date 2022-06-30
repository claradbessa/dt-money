import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import {App} from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Dev front end jr',
          type: 'deposit',
          category: 'dev',
          amount: 3000,
          createdAt: new Date('2021-01-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Hospedagem',
          type: 'withdraw',
          category: 'site',
          amount: 80,
          createdAt: new Date('2021-01-20 12:30:00'),
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      // return [
      //   {
      //     id: 1,
      //     title: 'Transaction 1',
      //     amount: 400,
      //     type: 'deposit',
      //     category: 'food',
      //     createdAt: new Date(),
      //   }
      // ]
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
