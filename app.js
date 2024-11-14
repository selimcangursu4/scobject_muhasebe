const express = require('express');
const app     = express();
const ejs     = require('ejs');
const path    = require('path');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));


app.listen('5255',(err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log('Sunucu Bağlantısı Başarılı');
})