const express = require('express');

const router = express.Router();


module.exports = (param) => {
    const {speakersServices} = param;
    router.get('/', async(req, res, next) =>{
        const result = await Promise.all([speakersServices.getSummary(), speakersServices.getGalleryAll()]);
        //console.log(speakerSummaries)
        return res.render('speakers', {
            page:'Speakers',
            speakerSummaries:result[0],
            gallery:result[1]
        })
    })
    router.get('/:name', (req, res, next) =>{
        res.render('speakers/speaker', {
            page:`${req.params.name}`
        })
    })
    return router;
}

