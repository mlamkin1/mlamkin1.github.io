document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const maskedText = document.getElementById('masked-text');
        if(maskedText) {
            maskedText.style.animationPlayState = "running";

            maskedText.addEventListener("animationend", function() {
                const loaderWrapper = document.querySelector('.loader-wrapper');
                if(loaderWrapper) {
                    loaderWrapper.style.display = 'none';
                }
            });
        }
    }, 500);
});

let lastScrollPosition = 0;
document.addEventListener('scroll', function(e) {
    let state = {
        showNav: true
    };
    
    if (window.scrollY > lastScrollPosition) {
        state.showNav = false;
    } else {
        state.showNav = true;
    }
    lastScrollPosition = window.scrollY;
}, { passive: true });

jQuery(document).ready(function($) {

    var nav = $('nav');
    var line = $('<div />').addClass('line');
    line.appendTo(nav);

    var active = nav.find('.active');
    var pos = 0;
    var width = 0;

    if (active.length) {
        pos = active.position().left;
        width = active.width();
        line.css({
            left: pos,
            width: width
        });
    }

    nav.find('ul li a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
         }, 500);
        if (!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {
            nav.addClass('animate');

            var _this = $(this);

            nav.find('ul li').removeClass('active');

            var position = _this.parent().position();
            var width = _this.parent().width();

            if (position.left >= pos) {
                line.animate({
                    width: ((position.left - pos) + width)
                }, 300, function() {
                    line.animate({
                        width: width,
                        left: position.left
                    }, 150, function() {
                        nav.removeClass('animate');
                    });
                    _this.parent().addClass('active');
                });
            } else {
                line.animate({
                    width: width
                }, 150, function() {
                    nav.removeClass('animate');
                });
                _this.parent().addClass('active');
            }
        }
    });
});
