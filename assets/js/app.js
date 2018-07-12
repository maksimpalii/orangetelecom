"use strict";

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

var pc = document.querySelector('.pc');

if (!isMobileDevice()) {
    pc.classList.add('act');
}


var swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
    }
});
var swiper2 = new Swiper('.swiper2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
    }
});
var swiper3 = new Swiper('.swiper3', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
    }
});


$(".menu_link").on("click", function (event) {
    event.preventDefault();
    var ids = $(this).attr('href'),
        gamb = document.querySelector('.menu-hamburger'),
        menu = document.querySelector('.menu-home'),
        mdop = document.querySelector('.menu-hamburger_mob'),
        topsb = $(ids).offset().top - 100;
    mdop.classList.toggle('active');
    gamb.classList.toggle('menu-hamburger_active');
    menu.classList.toggle('menu-home_active');
    $('body,html').animate({scrollTop: topsb}, 1000);
});

$(".menu_link2").on("click", function (event) {
    event.preventDefault();
    var ids = $(this).attr('href'),
        topsb = $(ids).offset().top - 100;
    console.log(topsb);
    $('body,html').animate({scrollTop: topsb}, 1000);
});


var navmainmenu = (function () {
    var menu = document.querySelector('.menu-home'),
        gamb = document.querySelector('.menu-hamburger'),
        mdop = document.querySelector('.menu-hamburger_mob'),
        navlang = document.querySelector('.menu-lang');
    return {
        set: function () {
            if (gamb !== null) {
                gamb.addEventListener('click', function () {
                    this.classList.toggle('menu-hamburger_active');
                    mdop.classList.toggle('active');
                    if (navlang !== null) {
                        navlang.classList.toggle('active');
                    }
                    menu.classList.toggle('menu-home_active');
                });

            }
        }
    }
}());

navmainmenu.set();

$('.toggle').click(function(e) {
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
    if ($this.hasClass('act')){
        $this.removeClass('act');
    }
    else {
        $this.parent().parent().find('li .toggle').removeClass('act');
        $this.toggleClass('act');
    }
});

$(document).ready(function() {
    $('.hdl_1').css('display','none');
    $('.hdl_2').css('display','none');
});