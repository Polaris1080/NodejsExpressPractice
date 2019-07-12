/*
 *  router1とほぼ同じ内容
 */
const express = require('express')
const app     = express()
const router  = express.Router();

router.all("/", (request, response) => {
    response.writeHead(200);
    response.write('hello world');
    res.end();
});

module.exports = router;