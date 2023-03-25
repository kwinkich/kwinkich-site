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



//document.querySelector('.dark-light').addEventListener('click', (event) => {
//    event.preventDefault();
//    if (localStorage.getItem('theme') === 'dark') {
//        localStorage.removeItem('theme');
//    }
//    else {
//        localStorage.setItem('theme', 'dark')
//    }
//    addDarkClassToHTML();
//});

//function addDarkClassToHTML() {
//    try {
//        if (localStorage.getItem('theme') === 'dark') {
//            document.querySelector('html').classList.add('dark');
//        }

//        else {
//            document.querySelector('html').classList.remove('dark');
//        }
//    } catch (err) { }
//}

//addDarkClassToHTML();

const handleChange = (isChecked) => {
    if (isChecked) {
        document.body.setAttribute('dark', '');
    } else {
        document.body.removeAttribute('dark');
    }
}



function detectTheme() {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isDark) {
        document.getElementById('dark-light').checked = true;
    } else {
        document.getElementById('dark-light').checked = false;
    }
}

detectTheme();