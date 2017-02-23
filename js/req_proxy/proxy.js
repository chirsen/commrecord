const request = require('request');
const http    = require('http');
const url     = require('url');

http.createServer(function(req, res){
    var path = url.parse(req.url).path,
        host = req.headers.host,
        hostHeader = "";
    if(host.split(".")){
        hostHeader = host.split(".")[0];
    }
    switch(hostHeader){
        case "vr":
            req.pipe(request(`http://127.0.0.1:8081${path}`)).pipe(res);
            break;
        case "tranvel":
            req.pipe(request(`http://127.0.0.1:8082${path}`)).pipe(res);
            break;
        case "wap.tranvel":
            req.pipe(request(`http://127.0.0.1:8083${path}`)).pipe(res);
            break;
        default:
            res.writeHead(200, {"Content-Type":"text/plain"});
            res.end("no domain");
    }
}).listen(80, "121.41.9.177");