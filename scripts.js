$(function(){
    zoom = $('.home-feature').css('background-size')
    zoom = parseFloat(zoom)/100
    size = zoom * $('.home-feature').width();
    $(window).on('scroll', function(){
      fromTop = $(window).scrollTop();
      newSize = size - (fromTop/3);
      if (newSize > $('.home-feature').width()) {
          $('.home-feature').css({
              '-webkit-background-size': newSize,
              '-moz-background-size': newSize,
              '-o-background-size': newSize,
              'background-size': newSize,
              '-webkit-filter':'blur('+ 0 + (fromTop/100) + 'px)',
              'opacity': 1 - ((fromTop / $('html').height()) * 1.3)
          });
      }
    });
});

$(function (){
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

    if (isChrome || isSafari) {
    } else {
        $('.home-feature').append('<div class="opaque"></div>');
        $(window).on('scroll', function(){
            var opacity = 0 + ($(window).scrollTop()/5000);
            $('.opaque').css('opacity', opacity);
        });
    }
});

document.addEventListener("scroll", function() {
    const nav = document.querySelector(".topnav");
    if (window.scrollY === 0) {
        nav.classList.add("full-width");
        nav.classList.remove("shrink");
    } else {
        nav.classList.add("shrink");
        nav.classList.remove("full-width");
    }
});

// Set initial state on page load
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector(".topnav");
    nav.classList.add("full-width");
});

document.addEventListener("scroll", function() {
    const scrollPrompt = document.getElementById("scrollPrompt");

    if (window.scrollY > 20) { // if scrolled even a little
        scrollPrompt.classList.add("hidden");
    } else {
        scrollPrompt.classList.remove("hidden");
    }
});

// Grab all sections and nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".topnav a");

function updateActiveLink() {
    let current = "";

    // Find the section currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70; // adjust for navbar height
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    // Remove 'active' from all links, then add to current
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
}

window.addEventListener("scroll", updateActiveLink);
