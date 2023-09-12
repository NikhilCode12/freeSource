document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('show-menu');
    });

    const loginForm = document.querySelector('.form');
    const emailInput = loginForm.querySelector('input[name="email"]');
    const passwordInput = loginForm.querySelector('input[name="password"]');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

    });

    const searchInput = document.querySelector('.srch');
    const searchButton = document.querySelector('.btn');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value;
    });
});
