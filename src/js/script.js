document.addEventListener('DOMContentLoaded', () => {
    // Элементы DOM
    const body = document.body;
    const burgerMenu = document.getElementById('burgerMenu');
    const burgerOpen = document.getElementById('burgerOpen');
    const burgerClose = document.getElementById('burgerClose');
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackCall = document.getElementById('feedbackCall');

    // Кнопки открытия форм
    const feedbackFormOpenButtons = [
        document.getElementById('feedbackFormOpen'),
        document.getElementById('formOpen')
    ].filter(Boolean);

    const feedbackCallOpenButtons = [
        document.getElementById('feedbackCallOpen'),
        document.getElementById('callOpen')
    ].filter(Boolean);

    // Кнопки закрытия форм
    const feedbackFormClose = document.getElementById('feedbackFormClose');
    const feedbackCallClose = document.getElementById('feedbackCallClose');

    // Функция открытия элемента
    function openElement(element) {
        element.classList.add('communication-forms--active');
        body.classList.add('body--menu-open');
        document.addEventListener('keydown', handleEscapeKey);
    }

    // Функция закрытия элемента
    function closeElement(element) {
        element.classList.remove('communication-forms--active');
        body.classList.remove('body--menu-open');
        document.removeEventListener('keydown', handleEscapeKey);
    }

    // Обработчик Escape
    function handleEscapeKey(e) {
        if (e.key === 'Escape') {
            if (burgerMenu.classList.contains('burger-menu--active')) {
                closeMenu();
            }
            if (feedbackForm.classList.contains('communication-forms--active')) {
                closeElement(feedbackForm);
            }
            if (feedbackCall.classList.contains('communication-forms--active')) {
                closeElement(feedbackCall);
            }
        }
    }

    // Бургер-меню
    function openMenu() {
        burgerMenu.classList.add('burger-menu--active');
        body.classList.add('body--menu-open');
    }

    function closeMenu() {
        burgerMenu.classList.remove('burger-menu--active');
        body.classList.remove('body--menu-open');
    }

    // Обработчики для бургер-меню
    if (burgerOpen) {
        burgerOpen.addEventListener('click', (e) => {
            e.stopPropagation();
            openMenu();
        });
    }

    if (burgerClose) {
        burgerClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMenu();
        });
    }

    // Обработчики для форм обратной связи
    feedbackFormOpenButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMenu(); // Закрываем меню если открыто
            openElement(feedbackForm);
        });
    });

    feedbackCallOpenButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMenu(); // Закрываем меню если открыто
            openElement(feedbackCall);
        });
    });

    // Обработчики закрытия форм
    if (feedbackFormClose) {
        feedbackFormClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeElement(feedbackForm);
        });
    }

    if (feedbackCallClose) {
        feedbackCallClose.addEventListener('click', (e) => {
            e.stopPropagation();
            closeElement(feedbackCall);
        });
    }

    // Закрытие по клику вне элемента
    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && e.target !== burgerOpen) {
            closeMenu();
        }
        if (!feedbackForm.contains(e.target) && ![...feedbackFormOpenButtons].some(btn => btn.contains(e.target))) {
            closeElement(feedbackForm);
        }
        if (!feedbackCall.contains(e.target) && ![...feedbackCallOpenButtons].some(btn => btn.contains(e.target))) {
            closeElement(feedbackCall);
        }
    });

    // Маска для телефона
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('input', function(e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            e.target.value = !x[2] ? x[1] : x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
        });
    });

    // Остальной код (слайдеры, кнопки "Показать все" и т.д.)
    document.querySelectorAll(".main__section .read-more-btn").forEach(toggleButton => {
        const section = toggleButton.closest('.main__section');
        if (!section) return;

        const btnText = toggleButton.querySelector('.read-more-btn__text');
        const btnIcon = toggleButton.querySelector('.read-more-btn__icon');
        const container = section.querySelector('.swiper-wrapper');
        if (!container) return;

        let isSliderExpanded = false;

        toggleButton.addEventListener('click', () => {
            isSliderExpanded = !isSliderExpanded;
            container.style.maxHeight = isSliderExpanded ? 'none' : '160px';
            btnText.textContent = isSliderExpanded ? 'Скрыть' : 'Показать все';
            btnIcon.classList.toggle('rotated', isSliderExpanded);

            const swiperInstance = section.querySelector('.swiper')?.swiper;
            if (swiperInstance) {
                setTimeout(() => swiperInstance.update(), 300);
            }
        });
    });

    document.querySelectorAll(".first-block .read-more-btn").forEach(button => {
        const contentBlock = button.closest('.first-block__text')?.querySelector('.first-block__content');
        if (!contentBlock) return;

        const textElement = button.querySelector('.read-more-btn__text');
        const iconElement = button.querySelector('.read-more-btn__icon');

        if (contentBlock.scrollHeight <= 90) {
            button.style.display = 'none';
            return;
        }

        let isContentExpanded = false;

        button.addEventListener('click', () => {
            isContentExpanded = !isContentExpanded;
            contentBlock.style.maxHeight = isContentExpanded ? 'none' : '90px';
            textElement.textContent = isContentExpanded ? 'Скрыть' : 'Читать далее';
            iconElement.classList.toggle('rotated', isContentExpanded);
        });
    });
});





