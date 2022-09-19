$(document).ready(function () {
    $('.content .content-top .content-top-1 .multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: true,
        prevArrow: "<button type='button' class='slick-prev m-button'><i class='fa-solid fa-circle-chevron-up mobile-root-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next m-button'><i class='fa-solid fa-circle-chevron-down mobile-root-right'></i></button>",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
});

$(document).ready(function () {
    $('.content .content-bot .content-bot-info').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // vertical: true,
        verticalSwiping: true,
        prevArrow: "<button type='button' class='slick-prev m-button'><i class='fa-solid fa-circle-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-next m-button'><i class='fa-solid fa-circle-chevron-right'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
});