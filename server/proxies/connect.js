'use strict';
const exec = require('child_process').exec;
const proxyPath = '/account';

module.exports = function (app) {
  // For options, see:
  // https://github.com/nodejitsu/node-http-proxy
  let proxy = require('http-proxy').createProxyServer({});
  exec('minikube ip', function (err, stdout, stderr) {
    proxy.on('error', function (err, req) {
      console.error(err, req.url);
    });

    //     proxy.on('proxyReq', function (proxyReq, req, res, options) {
    //       console.log('proxying to ' + process.env.DOMAIN)
    //       console.log('proxying to ' + stdout)
    //       proxyReq.setHeader('HOST', process.env.DOMAIN);
    //     });

    //     app.use(proxyPath, function (req, res, next) {
    //       // include root path in proxied request
    //       req.url = proxyPath + req.url;
    //       console.log(req.url)
    //       proxy.web(req, res, {
    //         target: `https://${stdout}`,
    //       });
    //     });
  });
};
