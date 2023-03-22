document.querySelector('.header__hamburger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__menu-block').classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        document.querySelector('.header__hamburger').classList.remove('active');
        document.querySelector('.header__menu-block').classList.remove('open');
    });
});