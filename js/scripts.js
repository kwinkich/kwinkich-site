//Функционал меню и закрытие при клике на ссылки
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



//Постоянная для переключателя темы
const handleChange = (isChecked) => {
    if (isChecked) {
        document.body.setAttribute('dark', '');
    } else {
        document.body.removeAttribute('dark');
    }
}

const checkbox = document.querySelector('#dark-light');
// Проверяем, есть ли сохраненная тема в локальном хранилище
if (localStorage.getItem('theme') === 'dark') {
    // Если есть, то устанавливаем значение true для чекбокса, чтобы он был отмечен
    checkbox.checked = true;
    // И переключаем тему
    handleChange(true);
}

// Добавляем обработчик события "change" для чекбокса
checkbox.addEventListener('change', function () {
    // Если чекбокс отмечен, то сохраняем значение "dark" в локальном хранилище
    if (this.checked) {
        localStorage.setItem('theme', 'dark');
        // И переключаем тему
        handleChange(true);
    } else {
        // Если чекбокс не отмечен, то удаляем сохраненное значение из локального хранилища
        localStorage.removeItem('theme');
        // И переключаем тему
        handleChange(false);
    }
});


