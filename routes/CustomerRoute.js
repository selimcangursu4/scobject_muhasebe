const express = require('express');
const CustomerRoute = express();

// Müşteri İndex
CustomerRoute.get('/customers/view',(req,res)=>{

    res.render('../views/customers/customers/index.ejs');
});

// Yeni Müşteri Ekle Sayfası
CustomerRoute.get('/customers/create',(req,res)=>{

    res.render('../views/customers/customers/create.ejs');
});



module.exports = CustomerRoute;