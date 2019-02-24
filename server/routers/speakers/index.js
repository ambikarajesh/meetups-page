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
    router.get('/:name', async (req, res, next) =>{
        const speaker = await speakersServices.getSpeakerInfo(req.params.name);
        console.log(speaker[0].title)
        res.render('speakers/speaker', {
            page:`${req.params.name}`,
            speaker:speaker[0],
            gallery:speaker[0].gallery
        })
    })
    return router;
}

