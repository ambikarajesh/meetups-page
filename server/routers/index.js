const express = require('express');

const router = express.Router();
const speakers  = require('./speakers');
const feedback = require('./feedback');
module.exports = (param) =>{
    const {speakersServices} = param;
    router.get('/', async(req, res, next) =>{
        const speakersTitle = await speakersServices.getTitle();
        console.log(speakersTitle)
        res.render('index', {
            page:'Home',
            speakersTitle
        });
    })
    router.use('/speakers', speakers());
    router.use('/feedback', feedback());
    
    return router;
}