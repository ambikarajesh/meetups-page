const express = require('express');

const router = express.Router();


module.exports = () => {
    router.get('/', (req, res, next) =>{
        return res.render('speakers')
    })
    router.get('/speaker', (req, res, next) =>{
        res.render('speakers/speaker')
    })
    return router;
}

