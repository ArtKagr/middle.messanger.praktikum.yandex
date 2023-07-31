const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

const routes = ['/', '/registration', '/chats', '/error', '*'];

routes.forEach((route) => {
    app.get(route, (req, res) => {
       res.sendFile(__dirname + '/dist/index.html');
    });
});

app.listen(PORT);
