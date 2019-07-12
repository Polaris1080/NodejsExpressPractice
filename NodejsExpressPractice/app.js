/*  Node.js(Express)���K�p
 *
 *  �Q�l�����F
 *  https://expressjs.com/ja/
 *  https://gist.github.com/mitsuruog/fc48397a8e80f051a145
 *  http://hideyukisaito.github.io/expressjs-doc_ja/guide/
 */



/*
 *  ���܂��Ȃ�(port3000�ŋN��)
 */
const express = require('express')
const app     = express()
app.listen(3000)


/*
 *  �A�v���P�[�V�����~�h���E�F�A
 */
var counter_app = 0  //�J�E���^�[
app.use('/', function (req, res, next) {
    counter_app++
    console.log('This is middleware-App : ' + counter_app + ' called')
    next()  //next��Y���ƁA���ɐi�܂Ȃ�
});


/*
 *  ��{�`
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
 *  router�̎g����
 */
//��{�͂�����
var router1 = require('./router1');  app.use('/router1', router1);
//������ł���
app.use('/router2', require('./router2'));


/*
 *  ����
 */
//�p�����[�^�[�i:x�j
app.get('/params/:x', function (req, res) {
    res.send('params : ' + req.params.x)
});
//�p�����[�^�[�i�����j
app.get('/params/:x/:y', function (req, res) {
    res.send('params : ' + req.params.x + '/' + req.params.y)
});
//�N�G���[�i?z=foge�j
app.get('/query',        function (req, res) {
    res.send('query : '  + req.query.z)
});



/*
 *  �o��
 */
//��{�`
app.get('/responce/send',     function (req, res) {
    res.send('Hello world')
});
//�X�e�[�^�X
app.get('/responce/status',   function (req, res) {
    res.status(418).end()
});
//���_�C���N�g
app.get('/responce/redirect', function (req, res) {
    console.log('redirect to /responce/red')
    res.redirect('/responce/red')
});
//���_�C���N�g��
app.get('/responce/red',      function (req, res) {
    res.send('redirect')
});


/*
 *  next()
 */
//next()�Ŏ��̃��[�e�B���O�ɓn��
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