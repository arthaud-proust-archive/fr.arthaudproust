window.addEventListener('DOMContentLoaded', function() {
    const sections = Array.from(document.querySelectorAll('#main > div > section'));
    const sectionEl = document.querySelector('.section-swiper');
    const pageArrows = {
        left: document.querySelector('.pageArrow.left'),
        right: document.querySelector('.pageArrow.right')
    };
    const sectionSwiper = new Swiper(sectionEl, {
        // Optional parameters
        direction: 'vertical',
        grabCursor: true,
        loop: false,
        freeMode: false,
        // autoHeight: true,
        // resistance: false,
        mousewheel: {
            forceToAxis: true,
            eventsTarget: sectionEl.closest('.swiper-slide')
        },
        resistanceRatio: 0.9,
    });
    const mainSwiper = new Swiper('.main-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        mousewheel: {
            forceToAxis: true,
            eventsTarget: '.main-swiper'
        },
        parallax: true,
        // freeMode: {
        //     enabled: false,
        //     sticky: true,
        //     momentum: true,
        //     momentumRatio: 0.7,
        //     momentumVelocityRatio: 0.8,
        //     minimumVelocity: 0.5
        // },
        // sticky: true,
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // hashNavigation: true,
        // centeredSlidesBounds: true,
        grabCursor: true,
        // resistance: false,
        shortSwipes: true,
        resistanceRatio: 1.2,
        longSwipesRatio: 0.1,
        threshold: 10,
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
    refreshPageArrows();

    function slideToHash(to) {
        if(to==="") return;    
        mainSwiper.slideTo(sections.indexOf(document.querySelector(`section[data-hash="${to}"]`)));
    }

    slideToHash(window.location.hash.replace('#',''));

    mainSwiper.on('sliderMove', function () {
        mainSwiper.el.classList.add('grabbing');
    });

    mainSwiper.on('touchEnd', function () {
        mainSwiper.el.classList.remove('grabbing');
    });

    mainSwiper.on("slideChange", refreshPageArrows);

    pageArrows.left.addEventListener('click', function() {
        mainSwiper.slidePrev(1500);
    });
    pageArrows.right.addEventListener('click', function() {
        mainSwiper.slideNext(1500);
    });



    sectionSwiper.on("slideChange", function(e) {
        // e.activeIndex
        try {
            const section = e.el.closest('section');
            const imageCover = document.getElementById('section-image-cover');
            if(!imageCover) return;
            const card = e.el.querySelectorAll('.swiper-slide')[e.activeIndex+1];
            const img = card.dataset.cover;
            if(!img) return;
            imageCover.src = img;
        } catch(e) {}
    })

    function refreshPageArrows() {
        pageArrows.left.classList.toggle('hidden', mainSwiper.isBeginning);
        pageArrows.right.classList.toggle('hidden', mainSwiper.isEnd || (mainSwiper.isBeginning && mainSwiper.slides.length===0));
    }


    function toggleMenu() {
        const open = document.body.dataset.menuOpen==="true";
        setMenu(!open);
    }

    function setMenu(closed) {
        document.body.dataset.menuOpen = closed;
        document.getElementById('menu-toggle').src= `assets/${closed?'close':'menu'}.svg`;
    }

    document.getElementById('links').querySelectorAll('a').forEach(link=>link.addEventListener('click', function() {
        setMenu(false)
        slideToHash(link.dataset.to)
    }));




    document.getElementById('menu-toggle').addEventListener('click', toggleMenu)

    document.querySelectorAll('.list-subitem, .lessMore').forEach(el=>{
        el.addEventListener('click', function(e) {
            if(e.target.tagName=="A" || e.target.parentElement.tagName=="A") {
                return;
            }
            const keepClosed = el.dataset.open==="true";
            document.querySelectorAll('.list-subitem, .lessMore').forEach(el=>{
                el.dataset.open = false;
            })

            el.dataset.open = keepClosed?"false":"true";
        })
    })


});