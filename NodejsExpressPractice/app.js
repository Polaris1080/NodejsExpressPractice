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

