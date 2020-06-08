"use strict";

var collageBlock = document.querySelectorAll('.collage__block');

var _loop = function _loop(i) {
    collageBlock[i].addEventListener('click', function () {
        if (collageBlock[i].classList.contains('productCard')) {
            window.location.href = 'productDetails.html';
        } else {
            window.location.href = 'categoryAll.html';
        }
    });
};

for (var i = 0; i < collageBlock.length; i++) {
    _loop(i);
}
///regular expression for mail
var reg = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
var singUpBtn = document.querySelector('.singUp__button');
var singUp = document.querySelector('.singUp__input');
singUpBtn.addEventListener('click', function () {
    var singUpValue = singUp.value;

    if (!reg.test(singUpValue)) {
        document.querySelector('.wrongPass').style.display = 'block';
        singUpValue = '';
        singUp.value = singUpValue;
    } else {
        document.querySelector('.wrongPass').style.display = 'none';
        singUpValue = '';
        singUp.value = singUpValue;
    }
});

//////////////////before Babel
// let collageBlock = document.querySelectorAll('.collage__block');
//
// for (let i = 0; i<collageBlock.length; i++){
//     collageBlock[i].addEventListener('click', function () {
//         if(collageBlock[i].classList.contains('productCard')) {
//             window.location.href = 'productDetails.html';
//         } else {
//             window.location.href = 'categoryAll.html';
//         }
//     })
// }
// ///regular expression for mail
// let reg = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
// let singUpBtn = document.querySelector('.singUp__button');
// let singUp = document.querySelector('.singUp__input');
// singUpBtn.addEventListener('click', function () {
//     let singUpValue = singUp.value;
//     if (!(reg.test(singUpValue))) {
//         document.querySelector('.wrongPass').style.display = 'block';
//         singUpValue = '';
//         singUp.value = singUpValue;
//     } else {
//         document.querySelector('.wrongPass').style.display = 'none';
//         singUpValue = '';
//         singUp.value = singUpValue;
//     }
// });
// /////////

