const express = require('express');
const app     = express();
const ejs     = require('ejs');
const path    = require('path');
const config  = require('./config/config');
const LoginRoute = require('./routes/LoginRoute');
const UserModel  = require('./models/User');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

app.use('/',LoginRoute);

app.listen('5255',(err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log('Sunucu Bağlantısı Başarılı');
})