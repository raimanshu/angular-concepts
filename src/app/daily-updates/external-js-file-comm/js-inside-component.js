function insideComponent() {
    alert("Flow control is inside js file inside component...");
}

var myExtObject = (function () {

    return {
        func1: function () {
            alert('I am function 1 of nested function call from ts in same component');
        },
        func2: function () {
            alert('I am function 2 of nested function call from ts in same component');
        }
    }

})(myExtObject || {})


var webGlObject = (function () {
    return {
        init: function () {
            alert('I am function 1 of single function call from ts in same component');
        }
    }
})(webGlObject || {})


//   (function(window, document, $) {
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