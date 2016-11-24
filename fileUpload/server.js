var http = require("http");
var formidable = require("formidable");
var fs = require("fs");
var util = require("util");

http.createServer(function(req, res) {
    if(req.url == "/jquery-form.js"){
       res.writeHead(200, { 'Content-Type': 'application/x-javascript' });
        var data = fs.readFileSync("jquery-form.js");
        res.end(data); 
    }

    if (req.url === '/test.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        var hdata = fs.readFileSync("test.html");
        res.end(hdata);
    }

    if (req.method === 'POST') {
        var form = new formidable.IncomingForm();
        form.encoding = 'utf-8'; //设置编辑
        form.keepExtensions = true; //保留后缀
        form.uploadDir = './public';
        form.maxFieldsSize = 8 * 1024 * 1024; //文件大小
        form.parse(req, function(err, fields, files) {

            var path = files.upload.path.split("\\").reverse()[1]+"/"+files.upload.path.split("\\").reverse()[0];
            console.log(path);
            res.writeHead(200, { 'content-type': 'text/plain' });
            res.end("ok");
        });

    }
}).listen(3000, "172.16.97.23");
