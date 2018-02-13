var restify = require('restify'),
    server = restify.createServer(
        {
            name:'Restifyserver',
            version:'1.0.0'
        }
    );

// Static file handling
server.get("/", restify.plugins.serveStatic({
    directory: '.',
    default: 'static.htm'
}));

server.get('/test', function (req, res, next) {
    res.send(200, {
        'value': 'Hello World'
    });
    return next();
});

server.post('/test', function (req, res, next) {
    res.send(200, {
        'value': 'Hello World ' + req.body.label
    });
    return next();
});


server.get('/test/:id', function (req, res, next) {
    res.send(200, {
        'value': 'Hello World ' + req.params.id
    });
});

server.listen(4444, function () {
    console.log(server.url);
});