$(document).ready(function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider-for',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinite: false
    });

    $('.tabs-switch a').click(function () {
        var parent = $(this).closest('.tabs-switch');
        if (!parent.hasClass('active')){
            parent.addClass('active').siblings().removeClass('active');
            var tab = $(this).data('tab');
            $('.tabs .tab').fadeOut(200, function () {
                $('#tab-'+tab).fadeIn(200);
            });
        }
    });
});