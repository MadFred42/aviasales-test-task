import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider } from 'react-redux';
import AviaSalesService from './service/aviaSalesServer';
import AviaServiceContext from './components/avia-service-context';
import store from './store';

const aviaSalesService = new AviaSalesService();

ReactDOM.render(
  <Provider store={store}>
    <AviaServiceContext.Provider value={aviaSalesService}>
      <App />
    </AviaServiceContext.Provider>
  </Provider>,
  document.getElementById('root')
);
