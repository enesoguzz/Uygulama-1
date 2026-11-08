# Tasarım Rehberi

> Sürüm 0.1 · 8 Kasım 2026 · Onaylandı

Arayüzle ilgili her işte bu dosyaya ve `docs/tasarim/` altındaki ekranlara uy. Tasarımda olmayan bir ekran gerekiyorsa aynı renkleri, yazı tiplerini ve bileşenleri kullan.

## Ekranlar

`docs/tasarim/` altındaki dosyalar tasarım aracının formatında (`.dc.html`). Tarayıcıda doğrudan açılmazlar, ama içlerindeki HTML ve satır içi stiller renk, boşluk, yazı boyutu ve metinler için birebir referanstır.

| Dosya | Ekran | Tanım dokümanında |
|---|---|---|
| `Main.dc.html` | Ana sayfa (mobil) | 4.1 Ana sayfa |
| `Liste.dc.html` | Yurt listesi (mobil) | 4.1 Liste ve harita |
| `YurtDetay.dc.html` | Yurt detayı (mobil) | 4.1 Yurt detay sayfası |
| `OdaDetay.dc.html` | Oda tipi detayı (mobil) | 4.1 Oda tipi detayı, 4.3 Öğrenci doğrulama |
| `Panel.dc.html` | Yurt sahibi paneli, genel bakış (masaüstü) | 4.2 Yurt sahibi paneli |

Tasarımdaki yurt adları, fiyatlar, sayılar ve öğrenci isimleri örnektir. Koda sabit olarak yazılmaz; veritabanından gelir. Gri kutular fotoğraf yer tutucusudur.

## Renkler

| Ad | Değer | Kullanım |
|---|---|---|
| `ink` | `#101828` | Başlıklar, ana metin |
| `text` | `#344054` | Gövde metni |
| `text-secondary` | `#475467` | İkincil metin |
| `muted` | `#5B6474` | Yardımcı metin, tarihler (beyaz zeminde 4.5:1 üstü) |
| `border` | `#E4E7EC` | Kart ve ayırıcı çizgileri |
| `border-strong` | `#D0D5DD` | Input ve ikincil buton kenarı |
| `bg` | `#F6F7F9` | Sayfa zemini |
| `surface` | `#FFFFFF` | Kartlar |
| `subtle` | `#F2F4F7` | Etiket zemini, segment kontrol zemini |
| `primary` | `#1D4ED8` | Ana buton, bağlantılar, aktif menü, Ruhsatlı rozeti |
| `primary-hover` | `#1E40AF` | Ana buton ve bağlantı üzerine gelince |
| `primary-soft` | `#EEF3FF` | Rozet zemini, bilgi kutuları |
| `photo-placeholder` | `#DCE3EC` | Fotoğraf yüklenene kadar |

**Boş yer durumu** (her zaman renk + nokta + yazı birlikte, asla sadece renk):

| Durum | Yazı | Zemin | Nokta |
|---|---|---|---|
| Boş yer var | `#0B6B33` | `#E3F3E8` | `#16A34A` |
| Sınırlı | `#9A4405` | `#FCEEDD` | `#EA7A0B` |
| Dolu | `#475467` | `#ECEEF2` | — |

**Uyarı kutusu** (güncel olmayan bilgi): zemin `#FFF6ED`, kenar `#F9DBAF`, metin `#7A2E0E`, ikon `#B54708`

**WhatsApp butonu:** `#0B6B33` zemin, beyaz yazı. WhatsApp'ın açık yeşili beyaz yazıyla yeterli kontrast vermediği için kullanılmadı.

## Yazı tipleri

- **Başlıklar:** Plus Jakarta Sans, 700–800, harf aralığı -0.01em / -0.02em
- **Gövde:** Inter, 400 / 500 / 600
- İkisi de `next/font/google` ile yüklenir. Türkçe karakterler için `latin-ext` alt kümesi dahil edilmeli.

| Kullanım | Boyut |
|---|---|
| Ana sayfa başlığı (mobil) | 30px |
| Sayfa başlığı | 25–28px |
| Bölüm başlığı | 18px |
| Kart başlığı | 15–17px |
| Gövde | 14–15px |
| Yardımcı metin | 13px |
| Etiket, tarih | 12px |

## Ölçüler

- **Köşe yarıçapı:** 8px (küçük), 10–12px (buton, input), 14–16px (kart), tam yuvarlak (etiket, çip)
- **Dokunma hedefi:** en az 44px. Ana butonlar 48–50px yükseklikte.
- **Boşluklar:** 4'ün katları. Mobilde sayfa yan boşluğu 16–20px, bölümler arası 24–28px.
- **Mobil referans genişliği:** Tasarım 390px. 375px'te de bozulmadan çalışmalı.
- **Masaüstü panel:** Sol menü 220px, içerik en fazla 1040px. Telefonda menü üste yığılır.

## Bileşenler

Ekranlarda tekrar eden parçalar. Her biri `components/` altında ayrı bileşen olsun.

| Bileşen | Nerede | Not |
|---|---|---|
| `AvailabilityBadge` | Liste, yurt detayı, oda detayı | 3 durum, renk + nokta + yazı |
| `LicenseBadge` | Liste, yurt detayı, panel | Kalkan ikonu + "Ruhsatlı" |
| `UpdatedAt` | Her fiyat ve boş yer bilgisinin yanında | "2 gün önce güncellendi". Panelde 10 günü geçince uyarı rengine döner; sitede 14 günü geçince "Bilgi güncel değil" görünür (TANIM.md bölüm 8). |
| `DormCard` | Liste | Fotoğraf, rozetler, ad, ilçe ve uzaklık, öne çıkan özellikler, başlangıç fiyatı, favori butonu |
| `RoomTypeRow` | Yurt detayı | Küçük fotoğraf, ad, özellikler, durum, fiyat |
| `FilterChip` | Liste | Seçili hali `primary-soft` zemin ve `primary` kenar |
| `ContactBar` | Yurt detayı, oda detayı | Ekranın altına sabit. "Ara" ve "WhatsApp'tan yaz". |
| `BottomNav` | Öğrenci ekranları | Keşfet, Harita, Favoriler, Hesabım |
| `PhotoGallery` | Yurt ve oda detayı | Sayaç ("1 / 16"), tam ekran açılır |
| `InquiryCard` | Oda detayı | Bilgi talebi. Doğrulama gerektirir. |
| `StatCard` | Panel | Etiket, büyük sayı, alt açıklama |
| `AvailabilityToggle` | Panel | 3 seçenekli segment. Tıklanınca "Az önce güncellendi". |
| `InquiryItem` | Panel | Baş harfler, isim, "Doğrulanmış öğrenci" etiketi, mesaj, zaman |
| `ProfileChecklist` | Panel | İlerleme çubuğu ve eksik adımlar |

## İkonlar

Tasarımda tek tip, çizgi (stroke) ikonlar kullanıldı. Kodda `lucide-react` kullan; çizgi stili tasarımla uyumlu. İkon boyutları 16–22px, çizgi kalınlığı 2.

## Erişilebilirlik

- Gerçek `<button>`, `<a>`, `<input>` ve `<label>` kullan; tıklanabilir `div` yapma.
- Sadece ikondan oluşan butonlarda `aria-label` olsun (ör. "Favorilere ekle", "Geri").
- Dekoratif ikonlarda `aria-hidden="true"`.
- Metin kontrastı en az 4.5:1. Yukarıdaki renkler bu sınırı geçiyor; yeni renk eklersen kontrol et.
- Boş yer durumu sadece renkle anlatılmaz, her zaman yazıyla da gösterilir.
