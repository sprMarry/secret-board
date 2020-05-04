'use strict';
const pug = require('pug');
const util = require('./handler-util');
const contents = [];

function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; cahrset=utf8'
      });
      res.end(pug.renderFile('./views/posts.pug', {contents}));
      break;
    case 'POST':
      let body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        const decoded = decodeURIComponent(body);
        let content = decoded.split('content=')[1];
        console.info(`投稿: ${content}`);
        contents.push(content);
        console.info(`全投稿: ${contents}`);
        handlerRedirectPosts(req, res);
      });
      break;
    default:
      util.handleBadRequest(req, res);
      break;
  };
};

function handlerRedirectPosts(req, res) {
  res.writeHead(303, {
    'Location': '/posts'
  });
  res.end();
};

module.exports = {
  handler
};
