const bannerSwiper = new Swiper(".banner-swiper", {
    slidesPerView: 1,
    speed: 1000,
    // loop: true,
    // autoplay: {
    //     delay: 2000,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const swiperPartners = new Swiper(" .swiper-partners", {
    slidesPerView: 5,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
        }
    }
});

const swiperWorkers = new Swiper(" .workers-swiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    speed: 1000,
    autoplay: {
        delay: 2000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },

        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
        }
    }
});
