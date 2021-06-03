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

// map

ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map("map", {
        center: [55.72841212167653, 37.64593570051657],
        zoom: 11,
        controls: [],
    }, {
        yandexMapDisablePoiInteractivity: true
    });

    var polygon = new ymaps.Polygon([
        [
            [55.72791171815129,37.64554206450491],
            [55.7278333870453,37.64587063510899],
            [55.72797713006052,37.64597763281463],
            [55.72799983466117,37.646000431591155],
            [55.728013835825166,37.64602993589022],
            [55.728024052887406,37.646074192338624],
            [55.72802367447801,37.646127165967094],
            [55.72799226646256,37.64628943961254],
            [55.72837503248383,37.6465702368671],
            [55.72844201033238,37.64656889576276],
            [55.72845866083172,37.64649915832948],
            [55.728466607345055,37.646420703715805],
            [55.728463201696684,37.6463469429679],
            [55.72845147112778,37.64627519387675],
            [55.728429145196536,37.646210820860404],
            [55.72841552258813,37.646182657665726],
            [55.72836935704633,37.64611694354486],
            [55.7283178937548,37.64608743924572],
            [55.72826983606077,37.646078722066406],
            [55.728243725950115,37.64606061715556],
            [55.72825886224829,37.64599423248245],
            [55.72816653073783,37.64592583615255],
            [55.7281922624923,37.645813183373946],
            [55.72819756020435,37.645705224461096],
            [55.727980342964045,37.645543584315966],
            [55.72791171815129,37.64554206450491]
        ]
    ], {
        hintContent: `<div class="map__hint">ул. Кожевническая, д. 14, стр. 5</div>`,
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__logo" src="img/logo-blue.png" alt="Лого"/>',
            '</div>'
        ].join('')
    }, {
        fillColor: '#0e65c8b2',
        interactivityModel: 'default#transparent',
        strokeWidth: 1,
        opacity: 1,
    });

    myMap.geoObjects.add(polygon);
    myMap.setBounds(polygon.geometry.getBounds());

}