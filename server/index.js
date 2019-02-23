const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'pug');

app.set('views', path.join(__dirname, './views'))
const routers = require('./routers');
if(app.get('env') === 'development'){
    app.locals.pretty = true
}
app.use(express.static('public'));
app.get('/favicon.ico', (req, res, next) => {
    return res.sendStatus(204);
})
app.use('/', routers());

app.get('*', function(req, res){
  res.render('error');
});
app.listen(3000, ()=> {
    console.log('Server Port : 3000');
})

