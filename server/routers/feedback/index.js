const express = require('express');

const router = express.Router();


module.exports = (param) => {
    const {feedbackServices} = param;

    router.get('/', async(req, res, next) =>{
        const feedbacks = await feedbackServices.getFeedback();
        //console.log(feedbacks)
        res.render('feedback',{
            page:'Feedback',
            feedbacks,
            success:req.query.success
        });
    })
    router.post('/', async(req, res, next) =>{
        console.log(req.body);
        const fbName = req.body.fbName.trim();
        const fbTitle = req.body.fbTitle.trim();
        const fbMessage = req.body.fbMessage.trim();
        const feedbacks = await feedbackServices.getFeedback();
        if(!fbName || !fbTitle || !fbMessage){
            res.render('feedback', {
                page:'Feedback',
                error:true,
                fbName,
                fbTitle,
                fbMessage,
                feedbacks
            })
        }
        await feedbackServices.addFeedback(fbName, fbTitle, fbMessage);
        res.redirect('feedback?success=true');
    })
    
    return router;
}

