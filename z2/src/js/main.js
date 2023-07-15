const menuToggleElement = document.getElementById('toggle');
const menuElement = document.getElementById('menu');
const accountLink = document.querySelectorAll('.account-link');

menuToggleElement.addEventListener('click', function() {
    menuElement.classList.toggle('visible');
});

const lanscapeBreakpoint = window.matchMedia('(min-width: 721px)');
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
    
    if (laptopBreakpoint.matches) {
        console.log("zaskoczyło")
        menuToggleElement.classList.add('laptop')
        menuElement.classList.add('laptop')
        accountLink[1].classList.remove('hidden');
        accountLink[0].classList.add('hidden');
    }
    else {
        menuToggleElement.classList.remove('laptop')
        menuElement.classList.remove('laptop')
    }
});

const laptopBreakpoint = window.matchMedia('(min-width: 1281px)');
laptopBreakpoint.addEventListener('change', function() {
    if (laptopBreakpoint.matches) {
        console.log("zaskoczyło")
        menuToggleElement.classList.add('laptop')
        menuElement.classList.add('laptop')
    }
    else {
        menuToggleElement.classList.remove('laptop')
        menuElement.classList.remove('laptop')
    }
});