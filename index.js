const express = require('express');
const app = express();
const { port } = require('./config')

// routes
const apiRouter = require('./routes/api')

app.use('/', apiRouter)

// server
app.listen(port, function() {
    console.log('serwer słucha... na porcie ' + port);
});