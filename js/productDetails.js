"use strict";

/////slider
var slides = document.querySelector('.slides');
var thumbnails = document.querySelector('.thumbnails');
thumbnails.addEventListener('click', function (event) {
    var thumbnailsNode = thumbnails.querySelectorAll('li');
    for (var i = 0; i < thumbnailsNode.length; i++) {
        thumbnailsNode[i].querySelector('img').style.opacity = '1';
    }
    var target = event.target;
    if (target.getAttribute('src') !== null) {
        var img = target.getAttribute('src');
        slides.innerHTML = "<li><img src=\"" + img + "\" alt=\"\" /></li>";
        target.style.opacity = '0.5';
    }
});
///// sizes output
var sizes = [38, 39, 40, 41, 42];
var sizeChoice = document.querySelector('.product__sizeChoice');
var sizeContent = '';

for (var i = 0; i < sizes.length; i++) {
    sizeContent += "<li><button class=\"size\">" + sizes[i] + "</button></li>";
}
sizeChoice.innerHTML = sizeContent; ////
var productBtn = document.querySelector('.product__button');
var count = 0;
var basketCount = document.querySelector('.header__basket-link span');
productBtn.addEventListener('click', function () {
    productBtn.textContent = 'product added';
    productBtn.style.background = '#008000';
    productBtn.style.outline = 'none';
    count++;
    basketCount.textContent = count;
});

//////////////////before Babel
// /////slider
// let slides = document.querySelector('.slides');
// let thumbnails = document.querySelector('.thumbnails');
// thumbnails.addEventListener('click', function(event) {
//     let thumbnailsNode = thumbnails.querySelectorAll('li');
//     for (let i = 0; i<thumbnailsNode.length; i++){
//         thumbnailsNode[i].querySelector('img').style.opacity = '1';
//     }
//     let target = event.target;
//     if (target.getAttribute('src')!== null) {
//         let img = target.getAttribute('src');
//         slides.innerHTML = `<li><img src="${img}" alt="" /></li>`
//         target.style.opacity = '0.5'
//     }
// });
// ///// sizes output
// let sizes = [38,39,40,41,42];
// let sizeChoice = document.querySelector('.product__sizeChoice');
// let sizeContent = '';
// for (let i = 0; i<sizes.length; i++){
//     sizeContent += `<li><button class="size">${sizes[i]}</button></li>`
// }
// sizeChoice.innerHTML = sizeContent;
// ////
// let productBtn = document.querySelector('.product__button');
//
// let count = 0;
// let basketCount = document.querySelector('.header__basket-link span');
// productBtn.addEventListener('click', function () {
//     productBtn.textContent = 'product added'
//     productBtn.style.background = '#008000';
//     productBtn.style.outline = 'none';
//     count ++;
//     basketCount.textContent = count;
// })

