const express = require('express');
const path = require('path');
const app = express();
const indexPath = path.resolve('dist', 'index.html');
const PORT = process.env.PORT || 8080;

app.use(function(req, res, next) {
    next();
});

app.use(express.static(path.resolve('dist')));

app.get('*', (req, res) => {
    res.sendFile(indexPath);
});

app.listen(
    PORT,
    function() {
        console.log("App listen on port %s", PORT);
    }
);