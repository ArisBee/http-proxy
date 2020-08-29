// Load express package dependency 
const express = require('express');
// Create a new express app
const app = express();
// Create an http-proxy-middleware while loading the corresponding package
const { createProxyMiddleware } = require('http-proxy-middleware');

// The express app input a target website
app.use('/', createProxyMiddleware({ target: 'https://aristidebouix.cloud', changeOrigin: true }));
// The target website can be accessed on localhost port 3000
app.listen(3000);

