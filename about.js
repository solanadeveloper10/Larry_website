document.addEventListener('DOMContentLoaded', () => {
    const aboutButton = document.getElementById('aboutButton');
    const aboutModal = document.getElementById('aboutModal');
    const closeModal = document.getElementById('closeModal');

    // Функція для закриття модального вікна
    const closeModalWindow = () => {
        if (aboutModal.classList.contains('show')) {
            aboutModal.classList.remove('show');
        }
    };

    // Відкрити модальне вікно
    aboutButton.addEventListener('click', () => {
        aboutModal.classList.add('show');
    });

    // Закриття модального вікна при кліку на кнопку закриття
    closeModal.addEventListener('click', closeModalWindow);

    // Закриття модального вікна при кліку поза його межами (бекдроп)
    window.addEventListener('click', (event) => {
        if (event.target === aboutModal) {
            closeModalWindow();
        }
    });

    // Закриття модального вікна при натисканні клавіші Escape
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModalWindow();
        }
    });

    // Закриття модального вікна після перезавантаження сторінки
    closeModalWindow(); // Викликаємо функцію закриття одразу після завантаження сторінки
});
