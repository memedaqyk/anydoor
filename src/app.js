const http = require('http');
const chalk = require('chalk');
const conf = require('./config/defaultConf');
const path = require('path');
const route = require('./helper/route');


const server = http.createServer((req, res) => {
    const filePath = path.join(conf.root, req.url);
    route(req, res, filePath);
});

server.listen(conf.port, conf.hostname, () => {
    const addr = `http://${conf.hostname}:${conf.port}`;
    console.info(`Server started at ${chalk.green(addr)}`);
});

