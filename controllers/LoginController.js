const User = require('../models/User');

// Login Kontrol Fonksiyonu
async function loginControl(data) {

    try {
        const email = data.email;
        const password = data.password;

        // Email Kontrolü
        const user = await User.findOne({
            where: {
                email: email
            }
        });

        // Eğer Kullanıcı Varsa 
        if (user) {
            // Kullanıcının Şifresi
            const user_password = user[0].password;

            if (user_password == password) {
                // Şifreler Eşleşti
                return {
                    success: true,
                    message: "Kullanıcı Bilgileri Doğrulandı Giriş Yapılıyor"
                };
            } else {
                // Girilen Şifre Hatalı
                return {
                    success: false,
                    message: "Şifre Hatalı Lütfen Şifrenizi Kontrol Ediniz !"
                };
            }

        } else {
            // E-Posta adresi Hatalı veya Yok
            return {
                success: false,
                message: "Kullanıcı Bulunamadı , Lütfen E-Posta Adresinizi Kontrol Ediniz"
            };
        }

    } catch (error) {
        console.log('Bilinmeyen Bir Controller Hatası ' + error);
    }

};

// 

module.exports = {
    loginControl
}