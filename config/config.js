const Sequelize = require('sequelize');
const sequelize = new Sequelize('scobject_muhasebe', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

try {
    sequelize.authenticate();
    console.log('Veritabanı Bağlantısı Başarılı.');
} catch (error) {
    console.error('Veritabanı Bağlantısı Kurulamadı:', error);
}

module.exports = sequelize;