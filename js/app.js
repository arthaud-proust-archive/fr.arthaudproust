window.addEventListener('DOMContentLoaded', function() {
    const sections = Array.from(document.querySelectorAll('#main > div > section'));
    const sectionEl = document.querySelector('.section-swiper');
    var sectionSwiper;
    const pageArrows = {
        left: document.querySelector('.pageArrow.left'),
        right: document.querySelector('.pageArrow.right')
    };


    const mainSwiper = new Swiper('.main-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        speed: 1500,
        mousewheel: {
            forceToAxis: false,
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

    try {
        sectionSwiper = new Swiper(sectionEl, {
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
        sectionSwiper.on("reachBeginning", function(e) {
            if(mainSwiper.slides.length>0 && !mainSwiper.isBeginning) mainSwiper.slidePrev();
        });
        sectionSwiper.on("reachEnd", function(e) {
            console.log(mainSwiper);
            if(mainSwiper.slides.length>0 && !mainSwiper.isEnd) mainSwiper.slideNext();
        });
        
        sectionSwiper.on("slideChange", function(e) {
            console.log(this);
            // e.activeIndex
            // try {
            //     const section = e.el.closest('section');
            //     const imageCover = document.getElementById('section-image-cover');
            //     if(!imageCover) return;
            //     const card = e.el.querySelectorAll('.swiper-slide')[e.activeIndex+1];
            //     const img = card.dataset.cover;
            //     if(!img) return;
            //     imageCover.src = img;
            // } catch(e) {}
            try {
                const imageCoverContainer = document.getElementById('section-image-cover-container');

                const imgs = Array.from(imageCoverContainer.children);
                imgs.forEach(img=>img.classList.add('d-none'));

                const newI = window.screen.width>576?e.activeIndex+1:e.activeIndex;

                const card = e.el.querySelectorAll('.swiper-slide')[newI];
                if(!card) throw new Error();
                const imgName = card.dataset.cover;
                console.log(imgName);
                if(!imgName) throw new Error();
                const img = imageCoverContainer.querySelector(`#sic-${imgName}`);
                img.classList.remove('d-none');
            } catch(e) {
                document.getElementById('section-image-cover-container').querySelector(`#sic-preview`).classList.remove('d-none');
            }
        })
    } catch(e){}


    
    

    const updateMainScroll = function (e) {
        console.log('szszzzz');
        refreshPageArrows();
        if(
            mainSwiper.slides[mainSwiper.activeIndex].contains(sectionSwiper.el)
        ){
            if(sectionSwiper.isBeginning) {
                console.log('at beginning');
                try{sectionSwiper.slideNext(0);}catch(e){}
            } 
            if(sectionSwiper.isEnd) {
                console.log('at end');
                console.log('at beginning');
                try{sectionSwiper.slidePrev(0);}catch(e){}
            } 
            console.log('?');
            mainSwiper.mousewheel.disable();
        }else {
            mainSwiper.mousewheel.enable();
        }
    };

    updateMainScroll();

    mainSwiper.on("slideChange", updateMainScroll);
    
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

    pageArrows.left.addEventListener('click', function() {
        mainSwiper.slidePrev(1500);
    });
    pageArrows.right.addEventListener('click', function() {
        mainSwiper.slideNext(1500);
    });



    

    function refreshPageArrows() {
        console.log(mainSwiper);
        pageArrows.left.classList.toggle('hidden', mainSwiper.isBeginning);
        pageArrows.right.classList.toggle('hidden', mainSwiper.isEnd || (mainSwiper.isBeginning && mainSwiper.slides.length===0));
    }


    function toggleMenu() {
        const open = document.body.dataset.menuOpen==="true";
        setMenu(!open);
    }

    function setMenu(closed) {
        document.body.dataset.menuOpen = closed;
        document.getElementById('menu-toggle').src= `/assets/${closed?'close':'menu'}.svg`;
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