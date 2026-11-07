# Uygulama-1 — Tanım Dokümanı

> Sürüm 0.1 · 7 Kasım 2026
> Çalışma adı: **Yurtrota** (geçici, değişecek)

Bu doküman ürünün ne olduğunu, ilk sürümde neyin yapılacağını ve neyin yapılmayacağını tanımlar. Agent'lar her görevden önce bu dosyayı okur. Burada olmayan bir özellik eklenmeden önce sorulur.

---

## 1. Özet

Türkiye'deki özel öğrenci yurtlarını öğrencilerin ve velilerin yurda gitmeden, bütün detaylarıyla inceleyebildiği bir platform. Oda fotoğrafları, yatak tipi, fiyat, konum, kurallar ve boş yer durumu tek yerde görünür.

- **İlk bölge:** İstanbul Avrupa Yakası
- **İlk platform:** Mobil uyumlu web sitesi
- **Sonra:** Aynı arka uca bağlanan mobil uygulama (iOS ve Android)
- **Para akışı:** İlk sürümde platform üzerinden ödeme yok

## 2. Kullanıcılar

| Kullanıcı | Ne istiyor |
|---|---|
| Öğrenci (yeni kazanan veya mevcut) | Bütçesine ve okuluna uygun yurdu hızlıca bulmak, odayı görmeden karar vermemek |
| Veli | Çocuğunun kalacağı yerin güvenli, ruhsatlı ve anlatıldığı gibi olduğundan emin olmak |
| Yurt sahibi / yetkilisi | Boş yataklarını doğru öğrencilere göstermek, telefonla tek tek anlatmak zorunda kalmamak |
| Yönetici (platform ekibi) | Sadece gerçek ve ruhsatlı yurtların yayında olmasını sağlamak |

## 3. Temel ilkeler

1. **Herkes gezebilir.** Yurtlar, fotoğraflar ve fiyatlar giriş yapmadan görülebilir. Veliler ve henüz kaydını yaptırmamış öğrenciler dışarıda kalmamalı. Sayfalar Google'da çıkmalı.
2. **Doğrulama işlemlerde istenir.** Öğrenci doğrulaması siteye girişte değil, belirli işlemlerde istenir (bkz. 4.3).
3. **Sadece ruhsatlı yurtlar yayına çıkar.** Kurum açma izni ve işyeri açma ve çalışma ruhsatı doğrulanmadan hiçbir yurt yayınlanmaz.
4. **Her bilginin tarihi görünür.** Fiyat ve boş yer bilgisinin yanında "son güncelleme" yazar. Eski bilgi açıkça işaretlenir.
5. **Sade, hızlı, mobil öncelikli.** Tasarım önce telefona göre yapılır. Ekranlar az ve net olur.
6. **Kişisel veriyi en az tut.** Doğrulama belgeleri işi bitince silinir.

## 4. İlk sürümün kapsamı (MVP)

### 4.1 Öğrenci ve veli tarafı

**Ana sayfa**
- Büyük arama kutusu: ilçe, semt veya üniversite adı
- Kız yurdu / Erkek yurdu hızlı seçimi
- Popüler bölgeler (Avrupa Yakası ilçeleri)
- "Nasıl çalışır" kısa açıklaması ve "Ruhsatlı yurtlar" güven vurgusu

**Liste ve harita**
- Liste ve harita arasında geçiş (mobilde sekme, masaüstünde yan yana)
- Yurt kartı: kapak fotoğrafı, yurt adı, kız/erkek etiketi, ilçe, seçilen üniversiteye uzaklık, en düşük aylık fiyat, boş yer durumu, "Ruhsatlı" rozeti, son güncelleme
- Filtreler:
  - Kız / Erkek
  - Aylık fiyat aralığı
  - Oda tipi: 1, 2, 3, 4+ kişilik
  - Odada banyo
  - Yemek: kahvaltı, akşam yemeği
  - Seçilen üniversiteye uzaklık
  - Sadece boş yeri olanlar
- Sıralama: önerilen, fiyat (artan/azalan), uzaklık, en son güncellenen

**Yurt detay sayfası**
- Fotoğraf galerisi (tam ekran açılır)
- Temel bilgiler: kız/erkek, kurum türü (yurt/pansiyon/apart), kapasite, adres
- Oda tipleri listesi (her biri kendi detayına açılır)
- Olanaklar: Wi-Fi, yemek, çamaşırhane, etüt odası, spor salonu, 7/24 güvenlik, temizlik, asansör, otopark vb.
- Kurallar: hafta içi ve hafta sonu giriş saati, ziyaretçi kuralları, diğer notlar
- Ücret detayı: aylık ücret, depozito, ücrete neler dahil
- Konum: harita, yakındaki üniversiteler ve uzaklıkları, en yakın toplu taşıma
- İletişim: Telefon ve WhatsApp butonu (WhatsApp mesajı hazır doldurulmuş gelir: "Merhaba, Yurtrota'da yurdunuzu gördüm…")
- Bilgi talebi formu (doğrulanmış öğrenci gerekir)
- Favoriye ekle, paylaş
- "Ruhsatlı" rozeti ve "son güncelleme" tarihi

**Oda tipi detayı**
- Odanın kendi fotoğrafları
- Kişi sayısı, yatak tipi (tek kişilik / ranza), yatak ölçüsü
- Odadaki eşyalar: dolap, çalışma masası, sandalye, kitaplık
- Odada banyo, klima, balkon, pencere yönü (varsa)
- Metrekare (varsa)
- Aylık fiyat, depozito
- Boş yer durumu: **Boş yer var / Sınırlı / Dolu** ve güncellenme tarihi

**Hesap**
- E-posta veya Google ile kayıt/giriş
- Favoriler
- Öğrenci doğrulama ekranı
- Gönderilen bilgi talepleri

### 4.2 Yurt sahibi paneli

**Başvuru ve onay**
- Yurt adı, yetkili kişi, telefon, e-posta
- Belge yükleme (zorunlu):
  - Kurum açma izni
  - İşyeri açma ve çalışma ruhsatı
  - Başvuranın yurdu temsil etmeye yetkili olduğunu gösteren belge
- Yönetici onayından sonra yurt yayına çıkar

**Yurt profili**
- Temel bilgiler, açıklama, olanaklar (işaretleme listesi), kurallar
- Konum: haritada iğne
- Fotoğraflar: yükleme, sıralama, kapak seçme

**Oda tipleri**
- Ekle / düzenle / kaldır
- Her oda tipine fotoğraf, özellikler, fiyat

**Boş yer durumu**
- Her oda tipi için tek dokunuşla: Boş yer var / Sınırlı / Dolu
- 14 gün güncellenmezse sitede "Bilgi güncel değil" olarak görünür
- 10. günde yurt sahibine hatırlatma e-postası gider

**İstatistikler**
- Profil görüntülenme, telefon ve WhatsApp tıklamaları, favoriye eklenme, bilgi talepleri
- Haftalık ve aylık görünüm

**Gelen talepler**
- Doğrulanmış öğrencilerden gelen bilgi talepleri listesi, "doğrulanmış öğrenci" etiketiyle

**Bir hesap, birden fazla yurt**
- Aynı sahip birden fazla şubeyi tek hesaptan yönetebilir

### 4.3 Öğrenci doğrulama

**Ne zaman istenir:**
- Bilgi talebi formu göndermek
- (Sonraki sürümler) kısa süreli konaklama talebi, yorum yazmak, öğrenci avantajları

**Ne zaman istenmez:**
- Gezinme, arama, filtreleme, yurt ve oda detayları, telefon/WhatsApp butonları, favoriler

**Yöntemler:**
1. **Üniversite e-postası:** `.edu.tr` ile biten adrese tek kullanımlık kod gönderilir. Otomatik ve anında.
2. **Belge yükleme:** e-Devlet'ten alınmış barkodlu öğrenci belgesi veya ÖSYM yerleştirme sonuç belgesi. Yönetici barkodu e-Devlet'te kontrol eder.

**Saklanan bilgi:**
- Doğrulama yöntemi, üniversite adı, doğrulama tarihi, geçerlilik tarihi (akademik yıl sonu)
- **Yüklenen belge, doğrulama tamamlanınca silinir.**

### 4.4 Yönetici paneli

- Yurt başvuruları: belgeleri görüntüle, onayla / reddet, "Ruhsatlı" rozeti ver
- Yurt adına içerik girme (başlangıçta içeriği yurtların gönderdiği bilgilerle biz gireriz, yurt sahibi kontrol edip onaylar)
- Öğrenci belge doğrulama kuyruğu
- Moderasyon: yurdu gizle, askıya al, kullanıcıyı engelle

## 5. İlk sürüme girmeyenler

| Özellik | Neden |
|---|---|
| Ödeme ve rezervasyon | Hukuki ve finansal yük. İlk sürümde iletişim yeterli. |
| Kısa süreli (haftalık) konaklama | Yönetmelik açısından netleşmedi. Yurtlara ve gerekirse GSB'ye sorulacak. |
| Yorumlar ve puanlar | Moderasyon ve hukuki risk. Sonraki sürümde, sadece doğrulanmış sakinler için. |
| Uygulama içi mesajlaşma | WhatsApp ve telefon yeterli. |
| Yurt karşılaştırma | Sonraki sürüm. |
| Mobil uygulama | Web oturduktan hemen sonra (Faz 2). |
| Diğer şehirler ve Anadolu Yakası | Önce Avrupa Yakası'nı eksiksiz doldurmak. |
| Öğrenci avantajları ve diğer hizmetler | Bkz. `docs/GELECEK-FIKIRLER.md` |

## 6. Teknik yapı

| Katman | Seçim |
|---|---|
| Web | Next.js (App Router), TypeScript, Tailwind CSS |
| Arka uç | Supabase: Postgres, Auth, Storage, Row Level Security |
| Fotoğraflar | Supabase Storage, `next/image` ile otomatik boyutlandırma ve WebP |
| E-posta | Resend (doğrulama kodları, hatırlatmalar) |
| Barındırma | Vercel (her PR için önizleme linki) |
| Harita | Karar bekliyor (Google Maps / Mapbox / MapLibre — maliyete göre) |
| Mobil (Faz 2) | Expo (React Native), aynı Supabase arka ucu |
| Dil | Türkçe arayüz. Çoklu dil altyapısı baştan hazır olsun. |

**Performans hedefleri**
- Mobilde ilk anlamlı içerik 2,5 saniyenin altında
- Liste ve yurt sayfaları sunucu tarafında oluşturulur
- Fotoğraflar tembel yüklenir (lazy loading)

**Arama motoru (SEO)**
- Her yurdun kendi adresi: `/yurt/[yurt-adi]`
- İlçe ve tür sayfaları: `/istanbul/besiktas/kiz-yurtlari`
- Üniversite sayfaları: `/universite/[universite-adi]/yakindaki-yurtlar`

## 7. Veri modeli (ilk taslak)

```
users                 id, email, name, phone, role (student | owner | admin), created_at
student_verifications user_id, method (edu_email | document), university_id,
                      status (pending | verified | rejected), verified_at, valid_until
dorms                 id, slug, name, gender (female | male), kind (yurt | pansiyon | apart),
                      description, address, district, city, lat, lng, phone, whatsapp,
                      capacity, license_verified, license_verified_at,
                      status (draft | pending | published | suspended), updated_at
dorm_members          dorm_id, user_id, role (owner | manager)
dorm_documents        id, dorm_id, kind (kurum_acma_izni | isyeri_ruhsati | yetki_belgesi),
                      file_path, reviewed_by, reviewed_at, status
room_types            id, dorm_id, name, capacity, bed_type (single | bunk), bed_size,
                      private_bathroom, air_conditioning, balcony, desk, area_m2,
                      monthly_price, deposit, academic_year,
                      availability (available | limited | full), availability_updated_at
photos                id, dorm_id, room_type_id (null olabilir), path, sort_order, is_cover
dorm_amenities        dorm_id, amenity_key
dorm_rules            dorm_id, curfew_weekday, curfew_weekend, visitor_policy, notes
universities          id, name, campus, district, lat, lng
favorites             user_id, dorm_id, created_at
inquiries             id, dorm_id, room_type_id, user_id, message, status, created_at
events                id, dorm_id, kind (view | phone_click | whatsapp_click | favorite), created_at
```

Kurallar:
- Her tabloda Row Level Security açık olur.
- Yurt belgeleri ve öğrenci belgeleri ayrı, herkese kapalı bir depolama alanında durur. Sadece yöneticiler görebilir.

## 8. Güncellik kuralları

- `availability_updated_at` 14 günden eskiyse: sitede "Bilgi güncel değil" etiketi
- 10. günde yurt sahibine hatırlatma e-postası
- Fiyatlar akademik yıla bağlıdır. Yeni yılın fiyatı girilene kadar "Geçen yılın fiyatı" etiketi görünür.

## 9. Gizlilik ve KVKK

- Öğrenci belgeleri doğrulama sonrası silinir
- Gizlilik politikası, KVKK aydınlatma metni ve çerez bildirimi sayfaları ilk sürümde hazır olur
- Yurt belgelerini yalnızca yöneticiler görür
- Bu metinler yayından önce bir hukukçuya kontrol ettirilir

## 10. Tasarım ilkeleri

- Sade ve ferah. Bol beyaz alan, net tipografi.
- Fotoğraflar ön planda. Arayüz fotoğrafların önüne geçmez.
- Güven unsurları görünür: Ruhsatlı rozeti, son güncelleme tarihi, doğrulanmış öğrenci etiketi.
- Boş yer durumu renkle ve yazıyla gösterilir (yeşil: var, turuncu: sınırlı, gri: dolu). Sadece renge güvenilmez.
- Tek elle kullanım: ana butonlar ekranın alt kısmında.

## 11. Yol haritası

| Faz | Tarih | İş |
|---|---|---|
| 0 | Kasım – Aralık 2026 | Tasarım, altyapı, öğrenci tarafında gezinme (liste, filtre, detay) |
| 1 | Ocak – Şubat 2027 | Yurt sahibi paneli, yönetici paneli, öğrenci doğrulama |
| 2 | Mart – Mayıs 2027 | Avrupa Yakası'nda ilk 30–50 yurt, kapalı test, mobil uygulama (Expo) |
| 3 | Haziran – Temmuz 2027 | Yayın. YKS sonrası sezona hazır olmak. |
| 4 | Eylül 2027 sonrası | Sezon değerlendirmesi, yeni ilçeler, gelecek fikirler |

## 12. Açık sorular

- [ ] Uygulamanın kalıcı adı ve domain
- [ ] Kısa süreli konaklamanın hukuki durumu (yurtlara ve GSB'ye sorulacak)
- [ ] Harita sağlayıcısı
- [ ] Avrupa Yakası'nda ilk hangi ilçelerle başlanacak
- [ ] Yurt yetkilisinden "yetki belgesi" olarak tam olarak ne istenecek
