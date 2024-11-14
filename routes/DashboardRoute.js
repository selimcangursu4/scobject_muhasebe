const express = require('express');
const DashboardRoute = express.Router();

// Kontrol Paneli Ekranı
DashboardRoute.get('/dashboard', (req, res) => {

    res.render('../views/dashboard.ejs');
});


module.exports = DashboardRoute