const menuElement = document.getElementById('menu');
const menuToggleElement = document.getElementById('toggle');

menuToggleElement.addEventListener('click', function() {
    menuElement.classList.toggle('visible');
});

const lanscapeBreakpoint = window.matchMedia('(min-width: 720px)');
lanscapeBreakpoint.addEventListener('change', function() {
    if (lanscapeBreakpoint.matches) {
        menuElement.classList.remove('visible');
    }
});
