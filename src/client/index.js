import React from 'react';
import { hydrate } from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';

import App from 'common/App.js';
import configureStore from 'store/configureStore.js';

const store = configureStore(window.__PRELOADED_STATE__);

window.main = () => {
  Loadable.preloadReady().then(() => {
    hydrate(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  });
};
  
if (module.hot) {
  module.hot.accept();
}