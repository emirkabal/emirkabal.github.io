---
title: 'CSS Relative ve Absolute Pozisyonlandırma: Temel Kavramlar ve Kullanım'
short_description: 'CSS ile relative ve absolute pozisyonlandırma yöntemlerinin anlamı, farkları ve kullanım örnekleri.'
tags: [css, tasarım, web, relative, absolute]
image: 'css-relative-ve-absolute-pozisyonlandirma-temel-kavramlar-ve-kullanim/utphq9bfigc2m2ugkxow.jpg'
createdAt: '2023-09-17T17:57:00.000Z'
---

Web tasarımında, öğeleri sayfanın içinde veya diğer öğelerle nasıl düzenleyeceğinizi belirlemek önemlidir. Bu düzenleme işlemi, CSS'de "relative" ve "absolute" pozisyonlandırma yöntemleri kullanılarak yapılabilir. Bu makalede, relative ve absolute pozisyonlandırma yöntemlerini anlatacağız, aralarındaki farkları inceleyeceğiz ve kullanım örnekleri sunacağız.

### Relative Pozisyonlandırma

Relative pozisyonlandırma, bir öğenin normal belgelik akış içinde bulunduğu konumdan göreceli olarak kaydırılmasını sağlar. Yani, öğe hala belgelik akış içindedir, ancak "left", "top", "right" ve "bottom" gibi özelliklerle belirtilen değerler kadar kaydırılabilir. Bu, öğenin nereye yerleştirileceğini belirlemek için kullanışlıdır, ancak diğer öğelerin konumunu etkilemez.

```css
.relative-ornek {
  position: relative;
  left: 20px;
  top: 10px;
}
```

### Absolute Pozisyonlandırma

Absolute pozisyonlandırma ise, bir öğeyi normal belgelik akışından çıkarır ve bu öğenin içinde bulunduğu en yakın "position: relative" veya "position: absolute" olan üst öğeye göre konumlandırır. Yani, öğe sayfanın içinde dilediğiniz gibi konumlandırılabilir, ancak bu diğer öğelerin konumunu etkileyebilir.

```css
.absolute-ornek {
  position: absolute;
  left: 50px;
  top: 50px;
}
```

### Farklar ve Kullanım Senaryoları

Relative pozisyonlandırma, öğelerin normal belgelik akışı içinde bulunmasını ve göreceli olarak kaydırılmasını sağlar. Genellikle öğeler arasında hizalama veya görsel ayarlamalar yapmak için kullanılır.

Absolute pozisyonlandırma ise, öğeleri normal akıştan çıkarır ve diğer öğelere göre konumlandırılmasını sağlar. Özellikle üst öğelerle ilişkilendirilerek kullanılır ve özel konumlandırma gerektiren öğeler için idealdir.

Hangi pozisyonlandırma yönteminin kullanılacağı, projenizin gereksinimlerine ve tasarım hedeflerine bağlıdır. Her iki yöntemin de avantajları ve sınırlamaları vardır ve doğru kullanıldığında güçlü tasarım araçları olabilirler.

### Sonuç

Relative ve absolute pozisyonlandırma, web tasarımında farklı gereksinimlere hizmet eder. Relative pozisyonlandırma, belgelik akışı içinde öğelerin göreceli olarak kaydırılmasına izin verirken, absolute pozisyonlandırma öğeleri bağlı oldukları üst öğelere göre konumlandırır. Hangi yöntemi kullanacağınız, tasarım ihtiyaçlarına bağlıdır ve her iki yöntem de tasarımın esnekliğini artırabilir.
