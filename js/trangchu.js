$(document).ready(function () {
    $('.content .content-2 .content-2-img').slick({
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