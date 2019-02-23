const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
class SpeakerServices{
    constructor(dataFile){
        this.dataFile = dataFile
    }
    async getData(){
        const data = await readFile(this.dataFile, 'utf-8');
        if(!data){
            return [];
        } 
        return JSON.parse(data).speakers;
    }
    async getName(){
        const data = await this.getData();         
        return data.map(speaker =>{
            return {name:speaker.name, shortname:speaker.shortname}
        })
    }
    async getTitle(){
        const data = await this.getData();
        return data.map(speaker =>{
            return{name:speaker.name, shortname:speaker.shortname, title:speaker.title}
        })
    }
    async getSummary(){
        const data = await this.getData();
        return data.map(speaker =>{
            return{name:speaker.name, shortname:speaker.shortname, title:speaker.title, summary:speaker.summary}
        })
    }
}

module.exports = SpeakerServices;