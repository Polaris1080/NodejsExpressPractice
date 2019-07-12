/*
 *  router2とほぼ同じ内容
 */
const express = require('express')
const app     = express()
const router  = express.Router();


router.all("/", (request, response) => {
    response.status(201).send("Hello World");
});

module.exports = router;