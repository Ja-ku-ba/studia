const resposiveElements = document.querySelectorAll('.responsive');
const lanscapeBreakpoint = window.matchMedia('(min-width: 721px)');
lanscapeBreakpoint.addEventListener('change', function() {
    if (lanscapeBreakpoint.matches) {
        document.body.classList.add('landscape')
        resposiveElements.forEach(function(element) {
            element.classList.add('landscape');
          });
    }
    else {
        document.body.classList.remove('landscape')
        resposiveElements.forEach(function(element) {
            element.classList.remove('landscape');
          });
    }
});
