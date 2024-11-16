const express = require('express');
const CustomerRoute = express.Router();
const CustomerCategories = require('../models/CustomerCategories');
const CustomerController = require('../controllers/CustomerController');

// Müşteri İndex
CustomerRoute.get('/customers/view',(req,res)=>{

    res.render('../views/customers/customers/index.ejs');
});

// Yeni Müşteri Ekle Sayfası
CustomerRoute.get('/customers/create', async(req,res)=>{

    const customer_categories = await CustomerCategories.findAll();
    res.render('../views/customers/customers/create.ejs',{customer_categories});
});

// Yeni Müşteir Ekle Post İşlemi

CustomerRoute.post('/customer/store',async(req,res)=>{

    try {
        const data = {
            customerType,
            companyName,
            fullname,
            shortName,
            customerCategory,
            email,
            phone,
            faxNumber,
            ibanNumber,
            postalCode,
            address,
            city,
            district,
            vknTckn,
            taxOffice,
            exchangeRate,
            openingBalance,
            opening_balance_date,
            opening_balance_amount,
            opening_balance_status_id,
            authorizedPersons
        } = req.body;
    
    
        const newCustomer = await CustomerController.store(data);
    
        if(newCustomer.success)
        {
            res.json({success:true,message:newCustomer.message});
        }else{
            res.json({success:false,message:newCustomer.message});
        }
    
    } catch (error) {
        console.log(error);
    }
})


module.exports = CustomerRoute;