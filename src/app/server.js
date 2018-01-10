const express = require('express');
const next = require('next');
const fs = require('fs');
const routes = require('./routes');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use(handler);
  server.listen(port);
});
