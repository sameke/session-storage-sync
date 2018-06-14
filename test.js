const express = require('express');
const path = require('path');
const ncp = require('ncp');

ncp('./dist', './test/dist', () => {
    const app = express();

    app.use(express.static(path.join(__dirname, 'test')));

    app.listen(8080, () => console.log('test app ready'));
});
