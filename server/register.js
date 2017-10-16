require('babel-register')({
    presets: ['es2015', 'stage-0', 'react'],
    plugins: [
        'transform-react-constant-elements',
        'transform-react-inline-elements',
        'transform-runtime',
        'transform-decorators-legacy'
    ]
});
require('./server');

/* WIP */