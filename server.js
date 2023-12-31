const path = require('path');

const express = require('express');

const app = express();

const PORT = 3000;

app.use(express.static('./dist'));

const routes = ['/', '/registration', '/chats', '/500', '*'];

routes.forEach((route) => {
  app.get(route, (_, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
  });
});

app.listen(PORT);
