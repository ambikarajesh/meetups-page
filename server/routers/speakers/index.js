const express = require('express');

const router = express.Router();


module.exports = () => {
    router.get('/', (req, res, next) =>{
        return res.render('speakers', {
            page:'Speakers'
        })
    })
    router.get('/:name', (req, res, next) =>{
        res.render('speakers/speaker', {
            page:`${req.params.name}`
        })
    })
    return router;
}

