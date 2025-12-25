// =====================
// Swiper Carousel
// =====================
document.addEventListener('DOMContentLoaded', function() {
    const popularSwiper = new Swiper(".popular-swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".carousel-next",
            prevEl: ".carousel-prev",
        },
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
});
