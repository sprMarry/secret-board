'use strict';

const postsHandler = require('./posts-handler');

function route(req, res) {
  switch (req.url) {
    case '/posts':
      postsHandler.handler(req, res);
      break;
    case '/logout':
      break;
    default:
      break;
  };
};

module.exports = {
  route
};
