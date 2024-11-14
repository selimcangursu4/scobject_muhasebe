const express = require('express');
const LoginRoute = express.Router();
const LoginController = require('../controllers/LoginController');

// Login Ekranı
LoginRoute.get('/',(req,res)=>{

    res.render('../views/login.ejs');
});

// Login Giriş Bilgileri Kontrolü
LoginRoute.post('/login/check',async(req,res)=>{
    try {
       const data = req.body;

       const loginControlResult = await LoginController.loginControl(data);

       if(loginControlResult)
       {
        res.json({success:true,message:loginControlResult.message});
       }else{
        res.json({success:false,message:loginControlResult.message})
       }
    } catch (error) {
        console.log('Bilinmeyen Bir Route Hatası ' + error);
    }
})


module.exports = LoginRoute