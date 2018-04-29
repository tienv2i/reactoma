import express from 'express';
import jsonServer from 'json-server';

const api = express.Router();

api.get('/', (req, res) => {
  res.send('API SERVER RUNNING');
});
api.use('/v1', jsonServer.router('data.json'));

export default api;