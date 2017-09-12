const express = require('express');
const path = require('path');
const app = express();

app.use(function(req, res, next) {
    console.log("Request recieved for:", req.url);
    next();
});

app.use(express.static(path.resolve(__dirname, 'dist')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(8080, function() {
    console.log("App listen on port 8080");
});