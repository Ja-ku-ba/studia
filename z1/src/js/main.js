const resposiveElements = document.querySelectorAll('.responsive');
const lanscapeBreakpoint = window.matchMedia('(min-width: 721px)');
lanscapeBreakpoint.addEventListener('change', function() {
    if (lanscapeBreakpoint.matches) {
        resposiveElements.forEach(function(element) {
            element.classList.add('landscape');
          });
    }
    else {
        resposiveElements.forEach(function(element) {
            element.classList.remove('landscape');
          });
    }
});
