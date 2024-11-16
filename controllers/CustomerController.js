const CustomerModel = require('../models/Customer');
const BalanceStatus = require('../models/BalanceStatus');
const AuthorizedPerson = require('../models/AuthorizedPerson');

async function store(data) {
  try {
    const {
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
      authorizedPersons = {},
      
    } = data;

    const { name: authorizedPersonName, phone: authorizedPersonPhone, email: authorizedPersonEmail, note: authorizedPersonNote } = authorizedPersons;

    // Müşteri Tablosuna Eklenecek Datalar
    const newCustomer = await CustomerModel.create({
      customer_type_id: customerType,
      company_name: companyName,
      fullname: fullname,
      short_name: shortName,
      customer_category_id: customerCategory,
      email: email,
      phone: phone,
      fax_number: faxNumber,
      iban_number: ibanNumber,
      postal_code: postalCode,
      address: address,
      city_id: city,
      district_id: district,
      vkn_tckn: vknTckn,
      tax_office: taxOffice,
      exchange_rate_id: exchangeRate,
      opening_balance_id: openingBalance,
    });

    if (!newCustomer) {
      return { success: false, message: "Müşteri Oluşturma Başarısız Oldu." };
    }

    // BalanceStatus Tablosuna Eklenecek Datalar
    const newBalanceStatus = await BalanceStatus.create({
      customer_id: newCustomer.id,
      start_date: opening_balance_date,
      balance: opening_balance_amount,
      balance_type_id: opening_balance_status_id,
    });

    if (!newBalanceStatus) {
      return { success: false, message: "Bakiye Durumu Oluşturulamadı" };
    }

     // İlgili Personele Tablosuna Eklenecek Datalar
    const newAuthPerson = await AuthorizedPerson.create({
      customer_id: newCustomer.id,
      fullname: authorizedPersonName,
      phone_number: authorizedPersonPhone,
      email: authorizedPersonEmail,
      note: authorizedPersonNote,
    });

    if (!newAuthPerson) {
      return { success: false, message: "Yetkili Kişi Oluşturulamadı" };
    }

    return { success: true, message: "Kullanıcı başarıyla kaydedildi." };
  } catch (error) {
    console.error(`Bilinmeyen Bir Hata: ${error}`);
    return { success: false, message: "Bir hata oluştu.", error: error.message };
  }
}

module.exports = { store };
