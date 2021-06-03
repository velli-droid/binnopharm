// search form
const searchForm = document.querySelector('.header__search');
const searchBtn = document.querySelector('.search-btn');
const searchBtnclose = searchForm.querySelector('.search-form__close');

searchBtn.onclick = function(e) {
    e.preventDefault();
    searchBtn.classList.toggle('active');
    searchForm.classList.toggle('active');
}

searchBtnclose.onclick = function()  {
    searchBtn.classList.toggle('active');
    searchForm.classList.toggle('active');
}



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

// map

ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map("map", {
        center: [55.72841212167653,37.64593570051657],
        zoom: 18,
        controls: [],
    }, {
        yandexMapDisablePoiInteractivity: true
    });
}

const polygon = new YMaps.Polygon([ new YMaps.GeoPoint(55.727912004872245,37.64554200808256),
    new YMaps.GeoPoint(55.727978605108326,37.64554200808256),
    new YMaps.GeoPoint(55.72819770394362,37.64570629338471),
    new YMaps.GeoPoint(55.72819202782357,37.6458108995363),
    new YMaps.GeoPoint(55.72816553925239,37.64592623452395),
    new YMaps.GeoPoint(55.72825938085115,37.645993571385716),
    new YMaps.GeoPoint(55.72824386614566,37.646061297163314),
    new YMaps.GeoPoint(55.72826830665043,37.64607955922514),
    new YMaps.GeoPoint(55.72831447231222,37.64608559419544),
    new YMaps.GeoPoint(55.728353448197105,37.64610571076305),
    new YMaps.GeoPoint(55.72836707082727,37.64611308683784),
    new YMaps.GeoPoint(55.72839923535178,37.646155331629835),
    new YMaps.GeoPoint(55.72842685898098,37.64620897581012),
    new YMaps.GeoPoint(55.72845221215765,37.64627737214),
    new YMaps.GeoPoint(55.72846242910476,37.64634710957439),
    new YMaps.GeoPoint(55.7284662314998,37.6464235544559),
    new YMaps.GeoPoint(55.72845790658095,37.64650133851733),
    new YMaps.GeoPoint(55.72844125673789,37.64656906429496),
    new YMaps.GeoPoint(55.72837390048184,37.646569734847205),
    new YMaps.GeoPoint(55.7279919240395,37.64628937795239),
    new YMaps.GeoPoint(55.72802408887438,37.64612442209797),
    new YMaps.GeoPoint(55.72802408887438,37.64607413067894),
    new YMaps.GeoPoint(55.728013114992514,37.646027192021165),
    new YMaps.GeoPoint(55.728001005877914,37.6460037226923),
    new YMaps.GeoPoint(55.7279790580981,37.64597824170666),
    new YMaps.GeoPoint(55.72783374834668,37.64586961224156),
    new YMaps.GeoPoint(55.727912004872245,37.64554200808256),
]);
const style = new YMaps.Style();
style.polygonStyle = new YMaps.PolygonStyle();
style.polygonStyle.fill = true;
style.polygonStyle.outline = flase;
style.polygonStyle.strokeWidth = 1;
style.polygonStyle.fillColor = "5693d9";

polygon.setStyle(style);
map.addOverlay(polygon);

