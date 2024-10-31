// MOBILE NAV

const navBtn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');
const menuIcon = document.querySelector('.nav-icon');
const fade = document.querySelector('.mobile-nav-fade');

navBtn.onclick = function () {
    nav.classList.toggle('mobile-nav--open');
    fade.classList.toggle('mobile-nav-fade--open');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
};

fade.onclick = function () {
    nav.classList.toggle('mobile-nav--open');
    fade.classList.toggle('mobile-nav-fade--open');
    menuIcon.classList.toggle('nav-icon--active');
    document.body.classList.toggle('no-scroll');
};

// CUSTOM SELECT

customSelect('select');

// EASE PICK

const picker = new easepick.create({
    element: document.getElementById('date'),
    css: ['https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css'],
    format: 'DD.MM.YY',
});

// SUBSCRIBE FORM IN FOOTER

const inputSubscribe = document.querySelector('.subscribe__input');
const label = document.querySelector('.subscribe__label');

inputSubscribe.addEventListener('input', () => {
    if (inputSubscribe.value.trim() !== '') {
        label.classList.add('subscribe__label--top');
    } else {
        label.classList.remove('subscribe__label--top');
    }
});