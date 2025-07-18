document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        loop: false,
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
            dynamicBullets: false,
        },
        breakpoints: {
            768: {
                enabled: false,
                pagination: {
                    dynamicBullets: false
                }
            }
        }
    })
});