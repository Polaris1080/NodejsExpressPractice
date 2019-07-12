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
 *  アプリケーションミドルウェア
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


/*
 *  入力
 */
//パラメーター（:x）
app.get('/params/:x', function (req, res) {
    res.send('params : ' + req.params.x)
});
//パラメーター（複数）
app.get('/params/:x/:y', function (req, res) {
    res.send('params : ' + req.params.x + '/' + req.params.y)
});
//クエリー（?z=foge）
app.get('/query',        function (req, res) {
    res.send('query : '  + req.query.z)
});



/*
 *  出力
 */
//基本形
app.get('/responce/send',     function (req, res) {
    res.send('Hello world')
});
//ステータス
app.get('/responce/status',   function (req, res) {
    res.status(418).end()
});
//リダイレクト
app.get('/responce/redirect', function (req, res) {
    console.log('redirect to /responce/red')
    res.redirect('/responce/red')
});
//リダイレクト先
app.get('/responce/red',      function (req, res) {
    res.send('redirect')
});


/*
 *  next()
 */
//next()で次のルーティングに渡す
var temp_verb = "";
app.get   ('/verb', function (req, res, next) {
    temp_verb = "get";    next()
});
app.post  ('/verb', function (req, res, next) {
    temp_verb = "post";   next()
});
app.put   ('/verb', function (req, res, next) {
    temp_verb = "put";    next()
});
app.delete('/verb', function (req, res, next) {
    temp_verb = "delete"; next()
});
app.all   ('/verb', function (req, res) {
    res.send(temp_verb);
});