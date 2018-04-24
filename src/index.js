import app from './server';
import http from 'http';
import Loadable from 'react-loadable';

const server = http.createServer(app);
const port = process.env.PORT || 3000;

let currentApp = app;

Loadable.preloadAll().then(() => { server.listen(port); });

if (module.hot) {
  console.log('Server-side HMR Enabled!');

  module.hot.accept('./server', () => {
    console.log('HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    const newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}
