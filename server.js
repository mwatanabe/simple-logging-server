http = require('http');

server = http.createServer(function(req, res) {
    console.log('Url: ' + req.url);
    console.log('Method: ' + req.method);
    console.log('Headers: ');
    console.dir(req.headers);

    var body = '';
    req.on('data', function (data) {
        body += data;
    });
    req.on('end', function () {
        console.log('Body: ' + body + '\n');
        res.end();
    });
});

port = process.env.PORT || 3000;
server.listen(port);
console.log('Listen on port' + port);

