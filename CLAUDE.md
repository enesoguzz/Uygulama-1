# CLAUDE.md

Bu repo, Türkiye'deki özel öğrenci yurtlarını listeleyen bir platformun koduyla birlikte tanım dokümanlarını içerir. Çalışma adı: **Yurtrota** (geçici).

## Her görevden önce

1. `docs/TANIM.md` dosyasını oku. Ürünün kapsamı oradadır.
2. Arayüzle ilgili bir işse `docs/TASARIM.md` dosyasını ve `docs/tasarim/` altındaki ilgili ekranı oku. Renkleri, yazı tiplerini, boşlukları ve metinleri oradan al.
3. Görev TANIM.md'de olmayan bir özellik gerektiriyorsa, yapmadan önce sor.
4. `docs/GELECEK-FIKIRLER.md` içindeki hiçbir şeyi kendiliğinden geliştirme.

## Teknoloji

- Next.js (App Router), TypeScript (strict), Tailwind CSS
- Supabase: Postgres, Auth, Storage
- Vercel'de barındırma
- Mobil uygulama ileride Expo ile yapılacak ve aynı Supabase arka ucunu kullanacak. Bu yüzden iş mantığını ve veri erişimini arayüz bileşenlerinin içine gömme; `lib/` altında, web'e bağımlı olmayan fonksiyonlar olarak yaz.

## Kurallar

- **Arayüz metinleri Türkçe**, kod, değişken, fonksiyon ve dosya adları İngilizce.
- Arayüz metinlerini bileşenlere sabit yazma; çoklu dil altyapısından (ör. `messages/tr.json`) al.
- **Mobil öncelikli** tasarla. Önce 375px genişlikte doğru görünmeli.
- Her Supabase tablosunda **Row Level Security** açık olmalı. RLS'siz tablo oluşturma.
- Veritabanı değişikliklerini `supabase/migrations/` altında migration dosyası olarak yaz.
- **Gizli anahtarları asla koda yazma.** Ortam değişkeni kullan, örnek değerleri `.env.example` dosyasına koy.
- Fotoğraflar için her zaman `next/image` kullan.
- Liste ve detay sayfaları sunucu tarafında oluşturulsun (SEO ve hız için).
- Öğrenci ve yurt belgeleri herkese kapalı bir depolama alanında durur. Öğrenci belgeleri doğrulama sonrası silinir.
- Ödeme, rezervasyon veya uygulama içi mesajlaşma ekleme.

## Çalışma şekli

- Küçük ve tek amaçlı değişiklikler yap. Bir PR = bir özellik veya bir düzeltme.
- PR açıklamasını Türkçe yaz: ne yapıldı, nasıl denenir, ekran görüntüsü (varsa).
- Kritik iş mantığına (doğrulama, güncellik kuralları, filtreleme) birim test yaz.
- Bitirmeden önce `lint`, `typecheck` ve `test` komutlarının geçtiğinden emin ol.

## Komutlar

```
npm install        # ilk kurulum
npm run dev        # geliştirme sunucusu (localhost:3000)
npm run build      # üretim derlemesi
npm run lint       # ESLint
npm run typecheck  # TypeScript denetimi
npm run test       # Vitest birim testleri
```

## Klasör yapısı (planlanan)

```
app/                 Sayfalar (Next.js App Router)
components/          Arayüz bileşenleri
lib/                 İş mantığı ve veri erişimi (web'e bağımlı değil)
messages/            Arayüz metinleri (tr.json)
supabase/migrations/ Veritabanı migration dosyaları
docs/                Tanım dokümanları
docs/tasarim/        Onaylanmış ekran tasarımları (referans, çalıştırılmaz)
```
