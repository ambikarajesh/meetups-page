const express = require('express');

const router = express.Router();


module.exports = (param) => {
    const {feedbackServices} = param;

    router.get('/', async(req, res, next) =>{
        const feedbacks = await feedbackServices.getFeedback();
        console.log(feedbacks)
        res.render('feedback',{
            page:'Feedback',
            feedbacks
        });
    })
    
    return router;
}

