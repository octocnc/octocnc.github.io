$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionSelector: 'section',
        fixedElements: 'nav, #splash',
        sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000'],
        menu: '#menu',
        paddingTop: '250px',
        onLeave: function(index, nextIndex, direction) {
            if(index===1) {
                $('#splash').addClass('partial');
            }

            if(nextIndex === 1) {
                $('#splash').removeClass('partial');
            }
        }

    });
});