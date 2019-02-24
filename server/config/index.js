const path = require('path');
module.exports = {
    development:{
        sitename:'Tamil Speakers Meetups [development]',
        data:{
            speakers : path.join(__dirname, '../data/speakers.json'),
            feedback : path.join(__dirname, '../data/feedback.json')
        }
    },
    production:{
        sitename:'Tamil Speakers Meetups',
        data:{
            speakers : path.join(__dirname, '../data/speakers.json'),
            feedback : path.join(__dirname, '../data/feedback.json')
        }
    }

}