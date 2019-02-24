const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

class FeedBackServices {
    constructor(feedbackFile){
        this.feedbackFile = feedbackFile
    }
    async getFeedback(){
        const feedback = await readFile(this.feedbackFile, 'utf-8');
        if(!feedback){
            return [];
        }
        //console.log(JSON.parse(feedback))
        return JSON.parse(feedback);
    }
}

module.exports = FeedBackServices;