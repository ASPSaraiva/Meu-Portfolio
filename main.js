var ul = document.querySelector('nav ul');

function toggleNavbar() {
    ul.classList.toggle('open');
}

ul.addEventListener('click', function () {
    ul.classList.remove('open');
});
