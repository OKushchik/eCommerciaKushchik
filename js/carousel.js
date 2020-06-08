"use strict";

var carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");
var width = carousel.offsetWidth;
next.addEventListener("click", function (e) {
    carousel.scrollBy(width, 0);
    prev.style.display = "flex";

    if (content.scrollWidth - width <= carousel.scrollLeft + width) {
        next.style.display = "none";
    }
});
prev.addEventListener("click", function (e) {
    carousel.scrollBy(-width, 0);
    next.style.display = "flex";

    if (carousel.scrollLeft - width <= 0) {
        prev.style.display = "none";
    }
});
window.addEventListener("resize", function (e) {
    return width = carousel.offsetWidth;
});
/////
var carouselItem = document.querySelectorAll('.item');
for (var i = 1; i < carouselItem.length; i += 2) {
    carouselItem[i].classList.add('productCard');
}
var _loop = function _loop(_i) {
    carouselItem[_i].addEventListener('click', function () {
        if (carouselItem[_i].classList.contains('productCard')) {
            window.location.href = 'productDetails.html';
        } else {
            window.location.href = 'categoryAll.html';
        }
    });
};
for (var _i = 0; _i < carouselItem.length; _i++) {
    _loop(_i);
}

//////////////////before Babel
// const carousel = document.getElementById("carousel"),
//     content = document.getElementById("content"),
//     next = document.getElementById("next"),
//     prev = document.getElementById("prev");
//
// let width = carousel.offsetWidth;
//
// next.addEventListener("click", e => {
//     carousel.scrollBy(width , 0);
//     prev.style.display = "flex";
//     if (content.scrollWidth - width <= carousel.scrollLeft + width) {
//         next.style.display = "none";
//     }
// });
// prev.addEventListener("click", e => {
//     carousel.scrollBy(-(width), 0);
//     next.style.display = "flex";
//     if (carousel.scrollLeft - width <= 0) {
//         prev.style.display = "none";
//     }
// });
//
// window.addEventListener("resize", e => (width = carousel.offsetWidth));
//
// /////
// let carouselItem = document.querySelectorAll('.item');
//
// for (let i = 1; i<carouselItem.length; i += 2){
//     carouselItem[i].classList.add('productCard');
// }
//
// for (let i = 0; i<carouselItem.length; i++){
//     carouselItem[i].addEventListener('click', function () {
//         if(carouselItem[i].classList.contains('productCard')) {
//             window.location.href = 'productDetails.html';
//         } else {
//             window.location.href = 'categoryAll.html';
//         }
//     })
// }
