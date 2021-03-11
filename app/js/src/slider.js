$('.teams__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    variableWidth: true,
    nextArrow: "<span class='slick-arrow slick-arrow__teams slick-arrow__teams__next'><img class='slick-arrow__img' alt='След.' src='./img/arrow-right.svg'></span>",
    prevArrow: "<span class='slick-arrow slick-arrow__teams slick-arrow__teams__prev'><img class='slick-arrow__img' alt='Пред.' src='./img/arrow-left.svg'></span>",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.steps__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    draggable: false,
    adaptiveHeight: true,
    nextArrow: "<span class='slick-arrow slick-arrow__steps slick-arrow__steps__next'><img class='slick-arrow__img' alt='След.' src='./img/arrow-right.svg'></span>",
    prevArrow: "<span class='slick-arrow slick-arrow__steps slick-arrow__steps__prev'><img class='slick-arrow__img' alt='пред.' src='./img/arrow-left.svg'></span>",
});