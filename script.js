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
    });

    const toggleButton = document.getElementById('toggleButton');
    if (toggleButton) {
        const btnText = toggleButton.querySelector('.read-more__text');
        const btnIcon = toggleButton.querySelector('.read-more__icon');
        const container = document.getElementById('swiperList');

        let isExpanded = false;

        toggleButton.addEventListener('click', () => {
            if (!isExpanded) {
                container.style.maxHeight = 'none';
                btnText.textContent = 'Скрыть';
                btnIcon.classList.add('rotated');
                isExpanded = true;

                if (swiper && typeof swiper.update === 'function') {
                    swiper.update();
                }
            } else {
                container.style.maxHeight = '160px';
                btnText.textContent = 'Показать все';
                btnIcon.classList.remove('rotated');
                isExpanded = false;
            }
        });
    }
});



