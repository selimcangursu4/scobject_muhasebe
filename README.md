# scobject_muhasebe
Basit ve kullanıcı dostu bir muhasebe yazılımı. Kayıtları tutma, gelir-gider takibi yapma, fatura oluşturma ve finansal raporlar hazırlama gibi temel muhasebe işlemlerini yönetmek için tasarlanmıştır. Küçük işletmeler, serbest meslek sahipleri ve bireysel kullanıcılar için ideal bir çözüm sunar.

# Muhasebe Programı

Bu proje, Node.js ve MySQL kullanılarak geliştirilmiş bir muhasebe programıdır. Proje, işletmelerin gelir-gider takibini, müşteri ve tedarikçi yönetimini ve finansal raporlamalarını kolayca yapmalarını sağlamak amacıyla oluşturulmuştur.

## Özellikler

### 1. **Ana Menü: Dashboard (Kontrol Paneli)**
   - **Genel Bakış**: Tüm finansal durumun özet görünümü.
   - **Grafikler**: Gelir, gider, kar-zarar durumları için grafiksel özetler.
   - **Raporlar**: Önemli finansal raporların hızlı erişim bağlantıları.
   - **Bildirimler**: Ödemeler, tahsilatlar, borçlar veya yakında vadesi dolacak faturalar hakkında bildirimler.
   - **Hızlı İşlemler**: Sık yapılan işlemler için kısayollar (fatura ekleme, yeni müşteri ekleme vb.).

### 2. **Ana Menü: Müşteri Yönetimi**
   - **Müşteri Listesi**: Tüm müşterilerin listesi ve detayları.
   - **Yeni Müşteri Ekle**: Yeni müşteri kaydı oluşturma.
   - **Müşteri Grupları**: Müşteri grupları (kurumsal, bireysel vb.) oluşturma ve yönetme.
   - **Tahsilatlar**: Her müşteriden yapılan tahsilatların listesi.
   - **Bakiye Durumları**: Müşteri borç ve alacak durumları.

### 3. **Ana Menü: Satış Yönetimi**
   - **Satış Faturaları**: Tüm satış faturalarının listesi.
   - **Yeni Satış Faturası**: Yeni satış faturası oluşturma.
   - **İade İşlemleri**: İade edilen ürünlerin yönetimi.
   - **Teklifler**: Müşterilere sunulan tekliflerin takibi.
   - **Satış Raporları**: Satış performansı, müşteri bazlı satış raporları.

### 4. **Ana Menü: Satın Alma Yönetimi**
   - **Satın Alma Faturaları**: Tüm satın alma faturalarının listesi.
   - **Yeni Satın Alma Faturası**: Yeni satın alma faturası oluşturma.
   - **Tedarikçi Yönetimi**: Tedarikçi listesi ve detayları.
   - **Satın Alma Siparişleri**: Tedarikçilerden verilen siparişlerin takibi.
   - **Satın Alma Raporları**: Satın alma analizleri, tedarikçi bazlı raporlar.

### 5. **Ana Menü: Stok Yönetimi**
   - **Stok Listesi**: Mevcut tüm ürünlerin listesi ve stok seviyeleri.
   - **Yeni Stok Ekle**: Yeni ürün veya stok ekleme.
   - **Depolar**: Farklı depoların yönetimi ve depolar arası transferler.
   - **Minimum Stok Uyarıları**: Azalan stok seviyeleri için uyarılar.
   - **Stok Hareketleri**: Tüm giriş-çıkış işlemleri.

### 6. **Ana Menü: Banka İşlemleri**
   - **Hesap Hareketleri**: Tüm banka hesaplarının giriş-çıkış işlemleri.
   - **Yeni Banka Hesabı**: Yeni banka hesabı ekleme.
   - **Kredi Kartları**: Kredi kartı işlemlerinin yönetimi.
   - **Para Transferleri**: Banka hesapları arasında yapılan transferlerin kaydı.
   - **Banka Raporları**: Hesap bazlı raporlar, toplam bakiyeler.

### 7. **Ana Menü: Kasa İşlemleri**
   - **Kasa Hareketleri**: Kasadan yapılan tüm giriş-çıkış işlemleri.
   - **Yeni Kasa Ekle**: Yeni kasa ekleme.
   - **Kasa Transferleri**: Kasa hesapları arasında yapılan transferlerin kaydı.
   - **Kasa Raporları**: Günlük, haftalık, aylık kasa raporları.

### 8. **Ana Menü: Çek ve Senet İşlemleri**
   - **Çekler**: Alınan ve verilen çeklerin listesi ve takibi.
   - **Senetler**: Alınan ve verilen senetlerin listesi ve takibi.
   - **Çek/Senet Tahsilatı**: Çek/senet tahsilat işlemleri.
   - **Raporlar**: Çek/senet vade tarihleri ve durumları hakkında raporlar.

### 9. **Ana Menü: Raporlar**
   - **Gelir Raporları**: Gelir kaynaklarına göre raporlar.
   - **Gider Raporları**: Giderlerin detaylı raporları.
   - **Kar-Zarar Raporu**: İşletmenin kar-zarar durum analizi.
   - **Nakit Akış Raporu**: Dönem bazlı nakit akışı raporu.
   - **Bilanço**: Dönem sonu finansal durum raporu.

### 10. **Ana Menü: Personel Yönetimi**
   - **Personel Listesi**: Tüm personelin listesi ve detayları.
   - **Maaş Yönetimi**: Maaş hesaplamaları, maaş bordroları.
   - **Avans ve Kesintiler**: Personel avansları ve maaş kesintilerinin yönetimi.
   - **İzin Takibi**: Personel izinlerinin takibi.
   - **Prim ve Ödemeler**: Performans primleri, ikramiyeler.

### 11. **Ana Menü: Gider Yönetimi**
   - **Gider Listesi**: Tüm giderlerin listesi ve detayları.
   - **Yeni Gider Ekle**: Yeni gider kaydı oluşturma.
   - **Gider Grupları**: Giderleri gruplama (ofis giderleri, personel giderleri vb.).
   - **Gider Raporları**: Gider analizleri ve dönemsel raporlar.

### 12. **Ana Menü: Faturalandırma ve Ödemeler**
   - **Faturalar**: Tüm faturaların listesi (satış, satın alma, gider).
   - **Yeni Fatura Oluştur**: Satış veya satın alma faturası ekleme.
   - **Ödeme Takibi**: Ödeme bekleyen faturalar ve geciken ödemeler.
   - **Fatura Raporları**: Fatura durumları, müşteri bazlı ödeme raporları.

### 13. **Ana Menü: Vergi Yönetimi**
   - **KDV Raporları**: Alınan ve verilen KDV raporları.
   - **Gelir Vergisi**: Gelir vergisi hesaplama ve raporlama.
   - **Diğer Vergiler**: Vergi türüne göre raporlama (ÖTV, Damga Vergisi vb.).
   - **Vergi Beyanname Takibi**: Beyannamelerin tarih ve durum takibi.

### 14. **Ana Menü: Sabit Kıymet Yönetimi**
   - **Sabit Kıymet Listesi**: Demirbaşlar, araçlar, makineler gibi tüm sabit kıymetlerin listesi.
   - **Yeni Sabit Kıymet Ekle**: Yeni demirbaş kaydı oluşturma.
   - **Amortisman Takibi**: Sabit kıymetlerin amortisman hesapları.
   - **Raporlar**: Demirbaş amortisman ve maliyet raporları.

### 15. **Ana Menü: Kullanıcı ve Yetki Yönetimi**
   - **Kullanıcı Listesi**: Programa erişimi olan kullanıcıların listesi.
   - **Yeni Kullanıcı Ekle**: Yeni kullanıcı kaydı oluşturma.
   - **Yetki Grupları**: Kullanıcı yetkilerini gruplara göre belirleme.
   - **Yetki Raporları**: Kullanıcı bazlı işlem geçmişi raporları.

### 16. **Ana Menü: Ayarlar**
   - **Firma Bilgileri**: Firma adı, vergi numarası, adres bilgileri.
   - **Para Birimi ve Kur Ayarları**: Para birimi ve döviz kur ayarları.
   - **Vergi Oranları**: KDV, gelir vergisi gibi vergi oranlarının ayarlanması.
   - **Fatura Tasarımı**: Fatura şablonlarının tasarımı.
   - **Yedekleme ve Geri Yükleme**: Veritabanı yedekleme ve geri yükleme işlemleri.
   - **Genel Ayarlar**: Tüm programın genel ayarları (temalar, dil, tarih formatı vb.).





