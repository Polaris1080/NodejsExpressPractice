/*  Node.js(Express)練習用
 *
 *  参考文献：
 *  https://expressjs.com/ja/
 *  https://gist.github.com/mitsuruog/fc48397a8e80f051a145
 *  http://hideyukisaito.github.io/expressjs-doc_ja/guide/
 */



/*
 *  おまじない(port3000で起動)
 */
const express = require('express')
const app     = express()
app.listen(3000)


/*
    アプリケーションミドルウェア
 */
var counter_app = 0  //カウンター
app.use('/', function (req, res, next) {
    counter_app++
    console.log('This is middleware-App : ' + counter_app + ' called')
    next()  //nextを忘れると、次に進まない
});


/*
 *  基本形
 */
// GET    http://localhost:3000/foo/
app.get   ('/foo',         (req, res)=>{ });
// POST   http://localhost:3000/foo/bar
app.post  ('/foo/bar',     (req, res)=>{ });
// PUT    http://localhost:3000/foo/bar/1
app.put   ('/foo/bar/:id', (req, res)=>{ });
// DELETE http://localhost:3000/foo/bar/1
app.delete('/foo/bar/:id', (req, res)=>{ });
// ALL    http://localhost:3000/foo/
app.all   ('/foo',         (req, res)=>{ });


/*
 *  routerの使い方
 */
//基本はこっち
var router1 = require('./router1');  app.use('/router1', router1);
//こちらでも可
app.use('/router2', require('./router2'));
