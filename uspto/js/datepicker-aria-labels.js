window.addEventListener('load', function() {
    let allcalendariconbtns = document.querySelectorAll('button.ui-datepicker-trigger')
    allcalendariconbtns.forEach(addarialabel => {
        addarialabel.setAttribute('aria-label','open a calendar to select a date');
    });
});

  

