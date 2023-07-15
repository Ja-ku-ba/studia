const menuToggleElement = document.getElementById('toggle');

menuToggleElement.addEventListener('click', function() {
    menuElement.classList.toggle('visible');
});

const menuElement = document.getElementById('menu');
const lanscapeBreakpoint = window.matchMedia('(min-width: 721px)');
const accountLink = document.querySelectorAll('.account-link');
lanscapeBreakpoint.addEventListener('change', function() {
    if (lanscapeBreakpoint.matches) {
        menuElement.classList.remove('visible');
        accountLink[1].classList.add('hidden');
        accountLink[0].classList.remove('hidden');
    }
    else {
        accountLink[1].classList.remove('hidden');
        accountLink[0].classList.add('hidden');
    }
});