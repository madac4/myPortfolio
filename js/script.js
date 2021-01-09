'use strict'


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form)

        let formData = new FormData(form)

        if (error === 0) {
            form.classList.add('_sending')
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                let result = await response.json();

                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert('ERROR')
                form.classList.remove('_sending');

            }
        } else {
            alert("Complect The Required Inputs")
        }
    };

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                };
            };
        };
        return error;
    };

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    };

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    };

    // TEST EMAIL
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    };

});

$(document).ready(function() {
    $('.burger_menu').click(function() {
        $('.burger_menu, .nav_menu').toggleClass('active');
    });

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockID = $(this).data('scroll');
        var pageOffset = $(blockID).offset().top;

        let $windowW = $(window).width();

        if ($windowW > 767) {
            $("html, body").animate({
                scrollTop: pageOffset - 150
            });
        } else {
            $("html, body").animate({
                scrollTop: pageOffset - 50
            });
        }
    });

    document.addEventListener('scroll', function() {
        var scrollPos = window.scrollY;

        if (scrollPos !== 0) {
            $('.header_head').addClass('scroll')
        } else {
            $('.header_head').removeClass('scroll')
        }
    })

    $('.companies').slick({
        arrows: false,
        slidesToShow: 4,
        focusOnSelect: true,
        swipeToSlide: true,
        centerMode: true,
        responsive: [{
            breakpoint: 768,
            settings: "unslick"
        }]
    });



    $(window).resize(function() {
        var $windowW = $(window).width();

        if ($windowW < 767) {
            $('.companies').slick('unslick');
        } else {}

    });
});

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;

    if (window.innerWidth > 768) {

        document.querySelectorAll('.section').forEach((el, i) => {
            if (el.offsetTop - document.querySelector('.nav_menu').clientHeight <= (scrollDistance + 150)) {
                document.querySelectorAll('.nav_menu a').forEach((el) => {
                    if (el.classList.contains('current')) {
                        el.classList.remove('current');
                    }
                });

                document.querySelectorAll('.nav_menu li')[i].querySelector('a').classList.add('current');
            }
        });
    }
});

// NAVCLOSE
window.addEventListener('scroll', () => {
    let topScroll = window.scrollY;
    let burger = document.querySelector('.burger_menu');
    let menu = document.querySelector('.nav_menu');
    // console.log(topScroll)
    if (topScroll > 100) {
        burger.classList.remove('active')
        menu.classList.remove('active')
    }
});


for (var i = 0; i <= item.length; i++) {
    item[i].addEventListener("click", function() {
        var current = document.getElementsByClassName('current');
        current[0].className = current[0].className.remove("current");
        this.className += " current";
    });
}