---
title: 'JavaScript map() Fonksiyonu'
short_description: 'JavaScript map() fonksiyonunu kullanarak dizileri dönüştürmek ve verileri işlemek için güçlü bir araç keşfedin.'
tags: [javascript, array, map, dizi, döngü, web]
image: 'javascript-map-fonksiyonu/ectrqxgnghtwhtscego0.jpg'
createdAt: '2023-09-23T16:00:00.000Z'
---

Bu yazıda, JavaScript'in `map()` fonksiyonunu keşfedeceğiz ve nasıl kullanılacağınıza dair örnekler sunacağım. `map()` fonksiyonu, dizileri dönüştürmek ve her bir öğeyi işlemek için mükemmel bir araçtır.

### `map()` Fonksiyonunun Temel Kullanımı

`map()` fonksiyonu, bir dizi veya iterable (yineleyici) nesnesinin her öğesini döngüye alır ve belirlediğiniz bir işlevi her öğe üzerinde uygular. Bu işlem sonucunda yeni bir dizi oluşturulur. İşte temel kullanımı:

```javascript
const sayilar = [1, 2, 3, 4, 5]

// Her öğeyi iki katına çıkaran bir işlev tanımlayalım
const ikiKat = sayilar.map(function (sayi) {
  return sayi * 2
})

console.log(ikiKat) // [2, 4, 6, 8, 10]
```

Yukarıdaki örnekte, `map()` fonksiyonu `sayilar` dizisindeki her öğeyi iki katına çıkardı ve sonucu `ikiKat` dizisine ekledi.

### Arrow Fonksiyonları ile Kısa Sözdizimi

Modern JavaScript ile, arrow fonksiyonlarını kullanarak daha kısa bir sözdizimi elde edebiliriz:

```javascript
const sayilar = [1, 2, 3, 4, 5]

// Arrow fonksiyonu ile her öğeyi üçe bölen işlem
const ucBolen = sayilar.map((sayi) => sayi / 3)

console.log(ucBolen) // [0.3333, 0.6666, 1, 1.3333, 1.6666]
```

### Pratik Kullanım Örnekleri

`map()` fonksiyonu, verileri dönüştürmek ve işlemek için çeşitli senaryolarda kullanılabilir. İşte bazı pratik örnekler:

#### Metin Dönüşümü

```javascript
const isimler = ['Tunca', 'Enis', 'Dost']

const buyukHarf = isimler.map((isim) => isim.toUpperCase())

console.log(buyukHarf) // ["TUNCA", "ENIS", "DOST"]
```

#### Nesne Dönüşümü

```javascript
const ogrenciler = [
  { ad: 'Atakan', yas: 25 },
  { ad: 'Ahmet', yas: 22 },
  { ad: 'Emir', yas: 20 }
]

const adlar = ogrenciler.map((ogrenci) => ogrenci.ad)

console.log(adlar) // ["Atakan", "Ahmet", "Emir"]
```

#### Matematiksel İşlemler

```javascript
const fiyatlar = [10, 15, 20, 25]

const kdvDahil = fiyatlar.map((fiyat) => fiyat * 1.2) // 20%

console.log(kdvDahil) // [12, 18, 24, 30]
```

Eğer daha fazla örneğe ihtiyacınız varsa [MDN - Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) sayfasını ziyaret edebilirsiniz.

### Sonuç

JavaScript'in `map()` fonksiyonu, dizileri işlemek ve dönüştürmek için güçlü bir araçtır. Bu yazıda, temel kullanımı ve pratik örnekleri gördük. `map()` fonksiyonunu kullanarak verileri daha düzenli ve işlenmesi kolay bir şekilde yönetebilirsiniz. Bu nedenle, JavaScript projelerinizde bu işlevi kullanmayı düşünün ve veri işleme süreçlerinizi basitleştirin.

Umarım bu yazı, JavaScript `map()` fonksiyonunu daha iyi anlamanıza ve projelerinizde kullanmanıza yardımcı olur. İyi kodlamalar!
