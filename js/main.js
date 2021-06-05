// mobile menu
const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.burger-btn');
const mobileMenuClose = mobileMenu.querySelector('.mobile-menu__close');

burgerMenu.onclick = function() {
    mobileMenu.classList.toggle('active');
}

mobileMenuClose.onclick = function() {
    mobileMenu.classList.toggle('active');
}

// search form
const searchForm = document.querySelector('.header__search');
const searchBtn = document.querySelector('.search-btn');
const searchBtnclose = searchForm.querySelector('.search-form__close');

searchBtn.onclick = function (e) {
    e.preventDefault();
    searchBtn.classList.toggle('active');
    searchForm.classList.toggle('active');
}

searchBtnclose.onclick = function () {
    searchBtn.classList.toggle('active');
    searchForm.classList.toggle('active');
}



// swipers
const gradientSwiperContainer = document.querySelector('.gradient-swiper');
const verticalSwiperContainer = document.querySelector('.production-swiper');
const newsSwiperContainer = document.querySelector('.news-swiper__container');

if (gradientSwiperContainer) {
    const gradientSwiper = new Swiper('.gradient-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.gradient-swiper__btn-next',
            prevEl: '.gradient-swiper__btn-prev',
        },
    });
}

// vertical swiper

if (verticalSwiperContainer) {
    const verticalSwiperSection = document.querySelector('.production');

    const verticalSwiper = new Swiper('.production-swiper', {
        direction: 'vertical',
        touchReleaseOnEdges: true,
        mousewheel: {
            invert: false,
            eventsTarget: verticalSwiperSection,
            sensitivity: 5,
            releaseOnEdges: true,
        },
        pagination: {
            el: '.production-swiper__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.production-swiper__btn-next',
            prevEl: '.production-swiper__btn-prev',
        },
        // breakpoints: {
        //     320: {
        //         direction: 'horizontal',
        //     },
        //     941: {
        //         direction: 'vertical',
        //     },
        // }
    });

    function isVisible(elem) {
        let coords = elem.getBoundingClientRect();

        let windowHeight = document.documentElement.clientHeight;
        // let topVisible = coords.top > 0 && coords.top < windowHeight;
        let bottomVisible = (coords.bottom / 2) < windowHeight && (coords.bottom / 2) > 0;

        return bottomVisible;
    }

    window.onscroll = function() {
        if(isVisible(verticalSwiperSection)) {
            verticalSwiper.mousewheel.enable();
        } else {
            verticalSwiper.mousewheel.disable();
        }
    }

}

if (newsSwiperContainer) {
    const newsSwiper = new Swiper('.news-swiper__container', {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: '.news-swiper__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.news-swiper__next',
            prevEl: '.news-swiper__prev',
        },
    });
}




