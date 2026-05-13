var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.2,
    spaceBetween: 45,
    loop: true,
    grabCursor: true,
    centeredSlides: false,
    breakpoints: {
        0: {
            slidesPerView: 1.1,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 3.2,
            spaceBetween: 45,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});