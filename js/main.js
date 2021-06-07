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




