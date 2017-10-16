const express = require('express');
const path = require('path');
const app = express();
const indexPath = path.resolve(__dirname, 'dist', 'index.html');

app.use(function(req, res, next) {
    next();
});

app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(indexPath);
});

app.listen(8080, function() {
    console.log("App listen on port 8080");
});