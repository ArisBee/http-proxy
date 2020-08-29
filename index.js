const express = require('express');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use('/', createProxyMiddleware({ target: 'https://aristidebouix.cloud', cha$
app.listen(3000);

