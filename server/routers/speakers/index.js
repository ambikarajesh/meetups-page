const express = require('express');

const router = express.Router();


module.exports = (param) => {
    const {speakersServices} = param;
    router.get('/', async(req, res, next) =>{
        const speakerSummaries = await speakersServices.getSummary();
        console.log(speakerSummaries)
        return res.render('speakers', {
            page:'Speakers',
            speakerSummaries
        })
    })
    router.get('/:name', (req, res, next) =>{
        res.render('speakers/speaker', {
            page:`${req.params.name}`
        })
    })
    return router;
}

