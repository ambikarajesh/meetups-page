const express = require('express');

const router = express.Router();


module.exports = () => {
    router.get('/', (req, res, next) =>{
        res.send('Feedback')
    })
    
    return router;
}

