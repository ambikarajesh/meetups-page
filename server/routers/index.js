const express = require('express');

const router = express.Router();
const speakers  = require('./speakers');
const feedback = require('./feedback');
module.exports = (param) =>{
    const {speakersServices} = param;
    router.get('/', async(req, res, next) =>{      
        const result = await Promise.all([speakersServices.getTitle(), speakersServices.getGalleryAll()]);
        //console.log(result)
        res.render('index', {
            page:'Home',
            speakersTitle:result[0],
            gallery:result[1]
        });
    })
    router.use('/speakers', speakers(param));
    router.use('/feedback', feedback(param));
    
    return router;
}