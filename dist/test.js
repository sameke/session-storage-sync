var express = require('express');
var path = require('path');
var ncp = require('ncp');
ncp('./dist', './test/dist', function () {
    var app = express();
    app.use(express.static(path.join(__dirname, 'test')));
    app.listen(8080, function () { return console.log('test app ready'); });
});
