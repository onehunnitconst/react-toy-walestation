const Router = require('koa-router');
const postsCtrl = require('./posts.ctrl');
const chkLoggedIn = require('../../lib/chkLoggedIn');

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', chkLoggedIn, postsCtrl.write);

const post = new Router();
post.get('/', postsCtrl.read);
post.delete('/', chkLoggedIn, postsCtrl.chkOwnPost, postsCtrl.remove);
post.patch('/', chkLoggedIn, postsCtrl.chkOwnPost, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, post.routes());

module.exports = posts;