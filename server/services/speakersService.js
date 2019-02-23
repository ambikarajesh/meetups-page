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
            console.log({name:speaker.name, shortname:speaker.shortname})
            return {name:speaker.name, shortname:speaker.shortname, title:speaker.title}
        })
    }
}

module.exports = SpeakerServices;