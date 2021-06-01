// swipers
const gradientSwiperContainer =  document.querySelector('.gradient-swiper');
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

if (verticalSwiperContainer) {
    const swiper = new Swiper('.production-swiper', {
        direction: 'vertical',
        pagination: {
            el: '.production-swiper__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.production-swiper__btn-next',
            prevEl: '.production-swiper__btn-prev',
        },
    });
}

if (newsSwiperContainer) {
    const newsSwiper = new Swiper('.news-swiper__container', {
        slidesPerView: 2,
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