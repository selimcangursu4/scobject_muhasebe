const express        = require('express');
const app            = express();
const ejs            = require('ejs');
const path           = require('path');
const config         = require('./config/config');
const LoginRoute     = require('./routes/LoginRoute');
const DashboardRoute = require('./routes/DashboardRoute');
const CustomerRoute  = require('./routes/CustomerRoute');

const UserModel               = require('./models/User');
const CustomerCategoriesModel = require('./models/CustomerCategories');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', LoginRoute);
app.get('/dashboard',DashboardRoute);
app.get('/customers/view',CustomerRoute);
app.get('/customers/create',CustomerRoute);

app.listen('5255', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Sunucu Bağlantısı Başarılı');
})