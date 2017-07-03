$(function() {
    var navSelector = '#toc';
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $('body').scrollspy({
        target: navSelector,
        offset: 90
    });

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $(this).blur();

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 75
        }, 900, 'swing', function () {
            window.location.hash = '1' + target;
        });
    });

});
