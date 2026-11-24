/*
 * На сторінці Sunny Coffee є промо-банер: зображення всередині посилання.
 * 1. Знайди зображення за класом .promo.
 * 2. Зміни його src на "https://picsum.photos/id/431/600/300" і alt на "Autumn coffee promo".
 * 3. Знайди посилання за класом .order і зміни його href на "https://sunny-coffee.example/menu".
 * 4. Виведи оновлений href посилання в консоль.
 */

// Твій код тут
const promoImage = document.querySelector(".promo");
promoImage.src = "https://picsum.photos/id/431/600/300";
promoImage.alt = "Autumn coffee promo";

const orderLink = document.querySelector(".order");
orderLink.href = "https://sunny-coffee.example/menu";
console.log(orderLink.href);
