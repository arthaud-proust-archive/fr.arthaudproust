window.addEventListener('DOMContentLoaded', function() {

    const mainSwiper = new Swiper('.main-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        mousewheel: {
            eventsTarget: 'container'
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
        resistanceRatio: 0.8,
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    mainSwiper.on('sliderMove', function () {
        mainSwiper.el.classList.add('grabbing');
    });

    mainSwiper.on('touchEnd', function () {
        mainSwiper.el.classList.remove('grabbing');
    });


    // const sectionSwiper = new Swiper('.section-swiper-1', {
    //     // Optional parameters
    //     direction: 'vertical',
    //     loop: false,
    //     // resistance: false,
    //     resistanceRatio: 0.9,
    // });

    function toggleMenu() {
        const open = document.body.dataset.menuOpen==="true";
        setMenu(!open);
    }

    function setMenu(closed) {
        document.body.dataset.menuOpen = closed;
        document.getElementById('menu-toggle').src= `assets/${closed?'close':'menu'}.svg`;
    }

    const sections = Array.from(document.querySelectorAll('#main > div > section'));
    document.getElementById('links').querySelectorAll('a').forEach(link=>link.addEventListener('click', function() {
        setMenu(false)
        mainSwiper.slideTo(sections.indexOf(document.querySelector(`section[data-hash="${link.dataset.to}"]`)));
    }));


    document.getElementById('menu-toggle').addEventListener('click', toggleMenu)

    document.querySelectorAll('.list-subitem, .lessMore').forEach(el=>{
        el.addEventListener('click', function() {
            const keepClosed = el.dataset.open==="true";
            document.querySelectorAll('.list-subitem, .lessMore').forEach(el=>{
                el.dataset.open = false;
            })

            el.dataset.open = keepClosed?"false":"true";
        })
    })


});