const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class FeedBackServices {
    constructor(feedbackFile){
        this.feedbackFile = feedbackFile
    }
    async getFeedback(){
        const feedback = await this.getData();
        return feedback;
    }
    async addFeedback(name, title, message){
        const feedback = await this.getData();
        feedback.unshift({name:name, title:title, message:message});
        return await writeFile(this.feedbackFile, JSON.stringify(feedback))
    }
    async getData(){
        const data = await readFile(this.feedbackFile, 'utf-8');
        if(!data){
            return [];
        } 
        return JSON.parse(data);
    }
}

module.exports = FeedBackServices;