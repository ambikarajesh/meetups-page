const express = require('express');
const path = require('path');
const configs = require('./config');
const routers = require('./routers');
const SpeakersService = require('./services/speakersService');
const FeedbackServices = require('./services/feedbackServices');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'))

const config = configs[app.get('env')];

const speakersServices =  new SpeakersService(config.data.speakers);
const feedbackServices = new FeedbackServices(config.data.feedback);
app.locals.title = config.sitename;

// app.use((req, res, next)=>{
//     app.locals.runTime = new Date();
//     return next();
// })
if(app.get('env') === 'development'){
    app.locals.pretty = true
}
app.use(express.static('public'));
app.get('/favicon.ico', (req, res, next) => {
    return res.sendStatus(204);
})

app.use( async (req, res, next)=>{
    try{
       const names = await speakersServices.getName();
       res.locals.speakerNames = names;
       return next();
    } catch(err){
        return next(err);
    }
})

app.use('/', routers({speakersServices, feedbackServices}));

app.get('*', function(req, res){
  res.render('error');
});
app.listen(3000, ()=> {
    console.log('Server Port : 3000');
})

