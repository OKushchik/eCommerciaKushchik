"use strict";

var goods = document.querySelectorAll('.goods__block');

for (var i = 0; i < goods.length; i++) {
    goods[i].addEventListener('click', function () {
        window.location.href = 'productDetails.html';
    });
}

//////////////////before Babel
// let goods = document.querySelectorAll('.goods__block');
// for (let i = 0; i<goods.length; i++){
//     goods[i].addEventListener('click', function () {
//         window.location.href = 'productDetails.html';
//     })
// }
