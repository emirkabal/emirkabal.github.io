---
title: 'JavaScript’te Gerçek Optimizasyon: "let m" Yazıp Kendini Kandırma'
short_description: 'JavaScript’te optimizasyonun asıl sırları, performans tüyoları ve "let m" yazarak kendini kandıranların komedisi.'
tags: [javascript, optimizasyon, programlama, performans, kodlama]
image: 'javascript-gercek-optimizasyon/xzripbhasejvvl9mzabe.jpg'
createdAt: '2025-04-08T12:00:00.000Z'
---

### JavaScript’te Gerçek Optimizasyon: "let m" Yazıp Kendini Kandırma

JavaScript’te optimizasyon, kodunu hızlandırıp kullanıcıyı memnun etmek demektir. Ancak bazıları, “`let m` yazayım, iki harf tasarruf edeyim, optimizasyon yaptım” diye düşünüyor. Bu tamamen yanlış bir yaklaşım! Optimizasyon, değişken adını kısaltmakla değil, akılcı yöntemlerle olur. Gelin, bu işin doğrusunu öğrenelim.

#### Optimizasyon Neden Önemli?

Web’de her milisaniye çok değerlidir. Kullanıcı 3 saniye beklerse sitenizi terk edebilir, siz de “Niye yavaş bu site?” diye düşünürsünüz. Gereksiz kod yazmak yerine, performansı düşünerek hareket etmek zorundasınız. Mesela bir dizi toplamı hesaplayalım:

```javascript
const numbers = [1, 2, 3, 4, 5]
let total = 0
for (const num of numbers) {
  total += num
}
console.log(total) // 15
```

Basit, okunabilir ve hızlı. Ancak bazıları şöyle yapıyor:

```javascript
let m = [1, 2, 3, 4, 5]
let t = 0
for (let i = 0; i < m.length; i++) {
  t += m[i]
}
```

“`let m` yazdım, optimize ettim” diye düşünüyorlar. Peki, neyi optimize ettiniz? Değişken adını kısaltmakla performans artmaz. Kodunuz hem çirkin görünüyor hem de anlamsız hale geliyor. Optimizasyon, iki harf tasarruf etmek değil, mantıklı yazmaktır.

#### Gerçek Dünya Örneği: Sepet Hesaplama

Diyelim bir e-ticaret sitesindesiniz ve sepet toplamını bulmanız gerekiyor:

```javascript
const cart = [
  { name: 'Telefon', price: 5000 },
  { name: 'Kulaklık', price: 500 },
  { name: 'Kılıf', price: 100 }
]

let total = 0
for (const item of cart) {
  total += item.price
}
console.log(total) // 5600
```

Temiz, hızlı ve iş bitirici. Ancak “ben optimizasyon ustasıyım” diyenler ne yapıyor?

```javascript
let m = cart
let t = 0
for (let i = 0; i < m.length; i++) {
  t += m[i].price
}
```

Bu mu optimizasyon? Kodunuz okunmaz hale geliyor, kimse ne yaptığınızı anlamıyor ve performans da artmıyor. `let m` yazıp kendinizi kandırmayı bırakın, işinizi düzgün yapın.

#### Optimizasyonun Altın Kuralları

1. **Okunabilirlik Öncelik**: `let members` yazın, neyi kastettiğiniz belli olsun. `let m` neyi temsil ediyor, kim anlayacak?
2. **Gereksiz İşlemden Kaçın**: Döngülerde fazladan kontrol yapmayın, sade tutun.
3. **Araçlarınızı Bilin**: JavaScript’in sunduğu metodları öğrenin, boş yere tekerleği yeniden icat etmeyin.

Sonuç olarak, optimizasyon “kısa yazayım” demek değil, “akıllı yazayım” demektir. `let m` yazanlar bu gerçeği anlamadıkça yanlış yolda ilerlemeye devam edecek.
