"use strict";

var goods = [{
    id: 1,
    img: 'adidas_4061616824004_images_16694640887.jpg',
    name: 'Nike Air Force',
    color: 'Black',
    size: 38,
    quantity: 1,
    price: 99.95,
    amount: function amount() {
        return this.quantity * this.price;
    }
}, {
    id: 2,
    img: 'clarks_5050409711958_images_17891686717.jpg',
    name: 'Clarks',
    color: 'white',
    size: 40,
    quantity: 1,
    price: 99.95,
    amount: function amount() {
        return this.quantity * this.price;
    }
}, {
    id: 3,
    img: 'puma_4062451596613_images_17624693701.jpg',
    name: 'Puma',
    color: 'brown',
    size: 39,
    quantity: 1,
    price: 99.95,
    amount: function amount() {
        return this.quantity * this.price;
    }
}];
var basketCount = 3;
///// products output
function render() {
    var table = document.querySelector('.table');
    var content = "\n<ul class=\"head\">\n\n        <li>Product</li>\n        <li>Description</li>\n        <li>color</li>\n        <li>size</li>\n        <li>QTY</li>\n        <li>Amount</li>\n        <li>delete</li>\n</ul>\n<hr/>\n";
    for (var i = 0; i < goods.length; i++) {
        content += "\n <div class=\"itemRow\">\n <div class=\"group-1\"\">\n    <div class=\"group-2\">\n        <div class=\"bag__img elem\">\n            <img src=\"img/detail/" + goods[i].img + "\" />\n        </div>\n    </div>\n    <div class=\"group-3\">\n        <div class=\"elem\">" + goods[i].name + "</div>\n        <div class=\"elem\">" + goods[i].color + "</div>\n        <div class=\"elem\">" + goods[i].size + "</div>\n        <div class=\"elem\">\n            <form class=\"bag__counter\">\n                <input type=\"number\" class=\"quantity\" name=\"quantity\" min=\"1\" value=\"" + goods[i].quantity + "\" data-id=\"" + goods[i].id + "\" />\n            </form>\n        </div>\n    </div >\n</div>\n    <div class=\"group-4\">\n        <div class=\"elem\">" + goods[i].amount() + "</div>\n        <div class=\"elem\">\n            <div class=\"bag__delete\">\n                <i class=\"icon i-plus-solid\" data-id=\"" + goods[i].id + "\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n    <hr>\n";
    }
    table.innerHTML = content;
    document.querySelector('.basketCounter span').innerHTML = basketCount;
    addEventQuantity();
    addEventDel();
    result();
}
render();
///// result
function result() {
    var content = document.querySelector('.subtotal span');
    var res = 0;
    for (var i = 0; i < goods.length; i++) {
        res += goods[i].price * goods[i].quantity;
    }
    content.innerHTML = res.toFixed(2) + ' $';
}
////addEventQuantity
function addEventQuantity() {
    var count = document.querySelectorAll('.quantity');
    for (var i = 0; i < count.length; i++) {
        count[i].addEventListener('change', function (e) {
            var target = e.target;
            var id = target.getAttribute('data-id');
            for (var j = 0; j < goods.length; j++) {
                if (goods[j].id === +id) {
                    goods[j].quantity = target.value;
                }
            }
            getBasketCount();
            render();
        });
    }
}
////delete
function addEventDel() {
    var del = document.querySelectorAll('.bag__delete');

    for (var i = 0; i < del.length; i++) {
        del[i].addEventListener('click', deleteItem);
    }
}
function deleteItem(e) {
    var target = e.target;
    var id = target.getAttribute('data-id');

    for (var i = 0; i < goods.length; i++) {
        if (+id === +goods[i].id) {
            goods.splice(i, 1);
        }
    }
    getBasketCount();
    render();
}
function getBasketCount() {
    basketCount = 0;

    for (var j = 0; j < goods.length; j++) {
        basketCount += +goods[j].quantity;
    }
}
///change location
var orderBtn = document.querySelector('.bag__order');
orderBtn.addEventListener('click', function () {
    console.log('s');
    window.location.href = 'thanks.html';
});

//////////////////before Babel
//  const goods = [
//      {
//          id:1,
//          img:'adidas_4061616824004_images_16694640887.jpg',
//          name: 'Nike Air Force',
//          color: 'Black',
//          size: 38,
//          quantity: 1,
//          price: 99.95,
//          amount: function () {
//              return this.quantity * this.price;
//          }
//      },
//      {
//          id:2,
//          img:'adidas_4061616824004_images_16694640887.jpg',
//          name: 'Nike',
//          color: 'white',
//          size: 40,
//          quantity: 1,
//          price: 99.95,
//          amount: function () {
//              return this.quantity * this.price;
//          }
//      },
//      {
//          id:3,
//          img:'adidas_4061616824004_images_16694640887.jpg',
//          name: 'Nike Nike',
//          color: 'brown',
//          size: 39,
//          quantity: 1,
//          price: 99.95,
//          amount: function () {
//              return this.quantity * this.price;
//          }
//      }
//  ]
//  let basketCount = 3;
//
// ///// products output
//
//  function render () {
//
//      let table = document.querySelector('.table');
//      let content = `
// <ul class="head">
//
//         <li>Product</li>
//         <li>Description</li>
//         <li>color</li>
//         <li>size</li>
//         <li>QTY</li>
//         <li>Amount</li>
//         <li>delete</li>
// </ul>
// <hr/>
// `;
//      for (let i = 0; i<goods.length; i++){
//          content += `
//  <div class="itemRow">
//  <div class="group-1"">
//     <div class="group-2">
//         <div class="bag__img elem">
//             <img src="img/detail/${goods[i].img}" />
//         </div>
//     </div>
//     <div class="group-3">
//         <div class="elem">${goods[i].name}</div>
//         <div class="elem">${goods[i].color}</div>
//         <div class="elem">${goods[i].size}</div>
//         <div class="elem">
//             <form class="bag__counter">
//                 <input type="number" class="quantity" name="quantity" min="1" value="${goods[i].quantity}" data-id="${goods[i].id}" />
//             </form>
//         </div>
//     </div >
// </div>
//     <div class="group-4">
//         <div class="elem">${goods[i].amount()}</div>
//         <div class="elem">
//             <div class="bag__delete">
//                 <i class="icon i-plus-solid" data-id="${goods[i].id}"></i>
//             </div>
//         </div>
//     </div>
// </div>
//     <hr>
// `
//      }
//      table.innerHTML = content;
//      document.querySelector('.basketCounter span').innerHTML = basketCount;
//      addEventQuantity();
//      addEventDel()
//      result();
//
//  }
// render();
// ///// result
// function result (){
//     let content = document.querySelector('.subtotal span')
//     let res = 0;
//     for (let i = 0; i<goods.length; i++){
//         res += goods[i].price * goods[i].quantity;
//     }
//     content.innerHTML = res.toFixed(2) + ' $'
// }
// ////addEventQuantity
// function addEventQuantity() {
//     let count = document.querySelectorAll('.quantity');
//     for (let i = 0; i<count.length; i++) {
//         count[i].addEventListener('change', function (e) {
//             let target = e.target;
//             let id = target.getAttribute('data-id');
//             for (let j = 0; j<goods.length; j++){
//                 if(goods[j].id === +id){
//                     goods[j].quantity = target.value;
//                 }
//             }
//             getBasketCount();
//             render();
//         })
//     }
// }
// ////delete
//  function addEventDel() {
//      let del = document.querySelectorAll('.bag__delete')
//      for(let i = 0; i<del.length; i++) {
//          del[i].addEventListener('click', deleteItem)
//      }
//  }
//
//
//  function deleteItem (e) {
//      let target = e.target;
//      let id = target.getAttribute('data-id')
//      for (let i = 0; i<goods.length; i++) {
//          if (+id === +goods[i].id) {
//              goods.splice(i,1)
//
//          }
//      }
//      getBasketCount();
//      render();
//  }
// function getBasketCount() {
//     basketCount = 0;
//     for (let j = 0; j<goods.length; j++){
//         basketCount += +goods[j].quantity;
//     }
// }
// ///change location
//  let orderBtn = document.querySelector('.bag__order')
//  orderBtn.addEventListener('click', function () {
//      console.log('s')
//      window.location.href = 'thanks.html';
//  })
