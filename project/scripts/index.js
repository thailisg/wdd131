//Script to control the responsive navigation menu
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menu-toggle');
    const navigation = document.querySelector('.navigation');

    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('active');
        menuButton.textContent = navigation.classList.contains('active') ? '✖' : '☰';
    });
});


