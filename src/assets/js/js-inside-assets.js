// (function(window, document, $) {
//     'use strict';

//     var axilKey = {
//         k: function() {
//             axilKey.s();
//             axilKey.methods();
//         },
//         s: function() {
//             this._window = $(window),
//                 this._document = $(document)
//         },
//         methods: function() {
//             axilKey._clickDoc();
//         },

//         _clickDoc: function() {
//             var inputFocus, iconchange, removeclasses, according, slidingup, nextitem;

//             iconchange = function(e) {
//                 $(this).toggleClass('active');
//                 $(".header .menu").toggleClass('menu-active');
//                 $(".backscreen").toggleClass('backactive');
//             }

//             inputFocus = function(e) {
//                 $(".icon").removeClass('active');
//                 $(".header .menu").removeClass('menu-active');
//                 $(this).removeClass('backactive');
//             };

//             removeclasses = function(e) {
//                 $(".icon").removeClass('active');
//                 $(".header .menu").removeClass('menu-active');
//                 $('.backscreen').removeClass('backactive');
//             }

//             according = function(e) {
//                 $(this).parent().find('.accordion-body').slideToggle();
//             }

//             slidingup = function(e) {
//                 $('.firstmenuclass').slideToggle();
//                 $('.other-price-box .firstmenuclass li ul').slideUp();
//             }

//             nextitem = function(e) {
//                 $(this).find('ul').slideToggle();
//                 $(this).closest('li').siblings().find('ul').slideUp();
//             }

//             // slidebar = function (e) {
//             //     $('.main-section').removeClass('page');
//             //     $('.icon').removeClass('active');
//             // }


//             axilKey._document
//                 .on('click', '.icon', iconchange)
//                 .on('click', '.backscreen', inputFocus)
//                 .on('click', '.menu .menu-bar ul li a', removeclasses)
//                 .on('click', '.accordion-heding', according)
//                 .on('click', '.other-price-box .menu-other-price', slidingup)
//                 .on('click', '.other-price-box .firstmenuclass li', nextitem)
//                 // .on('click', '.slider-nav ul li', slidebar)

//         }
//     };
//     setTimeout(function() { axilKey.k(); }, 500);
// })(window, document, jQuery);


// (function hello() {
//     alert('Hello!!!');
// })();

// function myTest() {
//     alert('Welcome to custom js');
// }

function myTest() {
    this.allowDrop = function (ev) {
        alert("ghjk,l");
      }
}
//  function test1(){
//     console.log('Calling test 1 function');
// }

var test1 = (function () {
    return {
        func1: function () {
            alert('Calling test 1 function');
        }
    }
})(test1 || {})

// $(function() {
//     alert('Hello, custom js');
// });

function myMethod(){
    console.log("err");
}