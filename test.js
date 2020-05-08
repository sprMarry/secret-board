'use strict';

const pug = require('pug');
const assert = require('assert');

const html = pug.renderFile('./views/posts.pug', {
  posts: [{
    id: 1,
    content: `<script>alert('Hello')</script>`,
    trackingCookie: 1,
    createdAd: new Date(),
    updatesAt: new Date()
  }
  ],
  user: 'guest1'
});

assert(html.includes(`&lt;script&gt;alert('Hello')&lt;/script&gt;`));
console.log('テストが正常に完了しました！')