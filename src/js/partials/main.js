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

    $('.scroll-link').on('click', function(e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600);
        return false;
    });




    var mapSettings = {
        center: [55.648570, 37.862139],
        zoom: [],
        controls: []
    };

    var mapPoints = [{
        "coords":[55.648570, 37.862139],
        "title":"Комплекс",
        "address": "г. Котельники, микрорайон «Южный», ул. Угрешская, напротив дома №6",
        "type": 0
        },{
        "coords":[55.760515, 37.855141],
        "title":"Офис продаж",
        "address": "г. Реутов, ул. Машиностроителей, д. 19/2",
        "type": 1
        }];

    var options = [{
        "iconLayout":"default#image",
        "iconImageHref":"data:image\/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iODUiIHZpZXdCb3g9IjAgMCA2NCA4NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYyLjEzODUgMzIuMDQyMlYzMi4wNDIxQzYyLjEzNjkgMTUuMzU3NiA0OC41NjQ1IDEuNzg1MTYgMzEuODgwNiAxLjc4NTE2QzE1LjE5NzUgMS43ODUxNiAxLjYyNSAxNS4zNTc3IDEuNjI1IDMyLjA0MjJDMS42MjUgMzYuMzg5MyAyLjUxNTM0IDQwLjU0OSA0LjI3Mzk1IDQ0LjRMNC4yNzQwNyA0NC40MDAzQzExLjY1MzIgNjAuNTQ3NiAyNS43NjI4IDc3LjU0MDMgMjkuODg5NCA4Mi4zMzk3TDI5Ljg5MDEgODIuMzQwNUMzMC4zODkgODIuOTE5NSAzMS4xMTYxIDgzLjI1MzIgMzEuODgxNCA4My4yNTMyQzMyLjY0NjcgODMuMjUzMiAzMy4zNzM4IDgyLjkxOTUgMzMuODcyNyA4Mi4zNDA1TDMzLjg3MzQgODIuMzM5NkMzNy45OTgzIDc3LjU0MTMgNTIuMTA3OSA2MC41NDk0IDU5LjQ4OTQgNDQuNDAwM0w1OS40ODk1IDQ0LjQwMDJDNjEuMjQ5MSA0MC41NDkgNjIuMTM4NSAzNi4zODkyIDYyLjEzODUgMzIuMDQyMloiIGZpbGw9IiNBNjE3NDQiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSIzMS44NzgyIiBjeT0iMzEuOTkxNSIgcj0iMjIuNjU1NSIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE2LjM2NzIgNDQuNjAxNkg0Ny4wMzM5IiBzdHJva2U9IiNBNjE3NDQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI1LjY5OTIgNDQuNjAwOVYyMS4yOTExQzI1LjY5OTIgMjAuNTc1OSAyNi4yOTYyIDE5Ljk5NjEgMjcuMDMyNiAxOS45OTYxSDM2LjM2NTlDMzcuMTAyMyAxOS45OTYxIDM3LjY5OTIgMjAuNTc1OSAzNy42OTkyIDIxLjI5MTFWNDQuNjAwOSIgc3Ryb2tlPSIjQTYxNzQ0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik00NS43MDA1IDQ0LjYwMjJWMzIuMjk5OEM0NS43MDA1IDMxLjk0MjIgNDUuNDAyIDMxLjY1MjMgNDUuMDMzOSAzMS42NTIzSDQxLjAzMzlDNDAuNjY1NyAzMS42NTIzIDQwLjM2NzIgMzEuOTQyMiA0MC4zNjcyIDMyLjI5OThWNDQuNjAyMiIgc3Ryb2tlPSIjQTYxNzQ0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yMy4wMzI2IDQ0LjYwMjJWMzIuMjk5OEMyMy4wMzI2IDMxLjk0MjIgMjIuNzM0MSAzMS42NTIzIDIyLjM2NTkgMzEuNjUyM0gxOC4zNjU5QzE3Ljk5NzcgMzEuNjUyMyAxNy42OTkyIDMxLjk0MjIgMTcuNjk5MiAzMi4yOTk4VjQ0LjYwMjIiIHN0cm9rZT0iI0E2MTc0NCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjEuNjk5MiAzMS42NTAxVjMwLjM1NTUiIHN0cm9rZT0iI0E2MTc0NCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNDEuNjk5MiAzMS42NTAxVjMwLjM1NTUiIHN0cm9rZT0iI0E2MTc0NCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzMuNjk5MiAxOS45OTU0VjE4LjA1MzVDMzMuNjk5MiAxNy42OTYxIDMzLjQwMDcgMTcuNDA2MiAzMy4wMzI2IDE3LjQwNjJIMzAuMzY1OUMyOS45OTc3IDE3LjQwNjIgMjkuNjk5MiAxNy42OTYxIDI5LjY5OTIgMTguMDUzNVYxOS45OTU0IiBzdHJva2U9IiNBNjE3NDQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMyLjM2NzIgMTcuNDA1NlYxNC44MTY0IiBzdHJva2U9IiNBNjE3NDQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI4LjM2NzIgMjMuODgyOEgzNS4wMzM5IiBzdHJva2U9IiNBNjE3NDQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI4LjM2NzIgMjcuNzY1NkgzNS4wMzM5IiBzdHJva2U9IiNBNjE3NDQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI4LjM2NzIgMzEuNjUyM0gzNS4wMzM5IiBzdHJva2U9IiNBNjE3NDQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI4LjM2NzIgMzUuNTM1MkgzNS4wMzM5IiBzdHJva2U9IiNBNjE3NDQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI4LjM2NzIgMzkuNDIxOUgzNS4wMzM5IiBzdHJva2U9IiNBNjE3NDQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==",
        "iconImageSize":[58,80],
        "iconImageOffset":[-29,-80],
        "balloonOffset":[100,-40],
        "hideIconOnBalloonOpen":false
    },{
        "iconLayout":"default#image",
        "iconImageHref":"data:image\/svg+xml;base64,PHN2ZyB3aWR0aD0iNjMiIGhlaWdodD0iODUiIHZpZXdCb3g9IjAgMCA2MyA4NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMuNjQ3MTUgNDQuNTk3NEwzLjY0NzI2IDQ0LjU5NzZDMTEuMDI1NCA2MC45MzE5IDI1LjEzMzkgNzguMTIyNSAyOS4yNjA2IDgyLjk3ODNMMjkuMjYxMyA4Mi45NzkxQzI5Ljc1OSA4My41NjM1IDMwLjQ4NzEgODMuOTAyNiAzMS4yNTY0IDgzLjkwMjZDMzIuMDI1NyA4My45MDI2IDMyLjc1MzggODMuNTYzNSAzMy4yNTE0IDgyLjk3OTFMMzMuMjUyMiA4Mi45NzgyQzM3LjM3NzIgNzguMTIzMyA1MS40ODU3IDYwLjkzMzUgNTguODY2MyA0NC41OTc3TDU4Ljg2NjMgNDQuNTk3NUM2MC42MjQ4IDQwLjcwMzcgNjEuNTEzNSAzNi40OTgyIDYxLjUxMzUgMzIuMTAzOFYzMi4xMDM3QzYxLjUxMTkgMTUuMjQxMiA0Ny45NTA0IDEuNTAzOTEgMzEuMjU1NiAxLjUwMzkxQzE0LjU2MTYgMS41MDM5MSAxIDE1LjI0MTIgMSAzMi4xMDM4QzEgMzYuNDk4NCAxLjg4OTYyIDQwLjcwMzggMy42NDcxNSA0NC41OTc0Wk00NS40NTI2IDMyLjEwM1YzMi4xMDNDNDUuNDUzNCA0MC4wMzkxIDM5LjA3MjUgNDYuNDc4IDMxLjI1NTYgNDYuNDc4QzIzLjQzOTUgNDYuNDc4IDE3LjA1ODUgNDAuMDM5MSAxNy4wNTg1IDMyLjEwM0MxNy4wNTg1IDI0LjE2NTkgMjMuNDM5NSAxNy43MjcgMzEuMjU1NiAxNy43MjdDMzkuMDcxNiAxNy43MjcgNDUuNDUyNiAyNC4xNjU5IDQ1LjQ1MjYgMzIuMTAzWiIgZmlsbD0iI0JGMjAyRCIvPgo8cGF0aCBkPSJNMy42NDcxNSA0NC41OTc0TDMuNjQ3MjYgNDQuNTk3NkMxMS4wMjU0IDYwLjkzMTkgMjUuMTMzOSA3OC4xMjI1IDI5LjI2MDYgODIuOTc4M0wyOS4yNjEzIDgyLjk3OTFDMjkuNzU5IDgzLjU2MzUgMzAuNDg3MSA4My45MDI2IDMxLjI1NjQgODMuOTAyNkMzMi4wMjU3IDgzLjkwMjYgMzIuNzUzOCA4My41NjM1IDMzLjI1MTQgODIuOTc5MUwzMy4yNTIyIDgyLjk3ODJDMzcuMzc3MiA3OC4xMjMzIDUxLjQ4NTcgNjAuOTMzNSA1OC44NjYzIDQ0LjU5NzdMNTguODY2MyA0NC41OTc1QzYwLjYyNDggNDAuNzAzNyA2MS41MTM1IDM2LjQ5ODIgNjEuNTEzNSAzMi4xMDM4VjMyLjEwMzdDNjEuNTExOSAxNS4yNDEyIDQ3Ljk1MDQgMS41MDM5MSAzMS4yNTU2IDEuNTAzOTFDMTQuNTYxNiAxLjUwMzkxIDEgMTUuMjQxMiAxIDMyLjEwMzhDMSAzNi40OTg0IDEuODg5NjIgNDAuNzAzOCAzLjY0NzE1IDQ0LjU5NzRaTTQ1LjQ1MjYgMzIuMTAzVjMyLjEwM0M0NS40NTM0IDQwLjAzOTEgMzkuMDcyNSA0Ni40NzggMzEuMjU1NiA0Ni40NzhDMjMuNDM5NSA0Ni40NzggMTcuMDU4NSA0MC4wMzkxIDE3LjA1ODUgMzIuMTAzQzE3LjA1ODUgMjQuMTY1OSAyMy40Mzk1IDE3LjcyNyAzMS4yNTU2IDE3LjcyN0MzOS4wNzE2IDE3LjcyNyA0NS40NTI2IDI0LjE2NTkgNDUuNDUyNiAzMi4xMDNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIiBmaWxsLW9wYWNpdHk9IjAuNzQiLz4KPHBhdGggZD0iTTMuNjQ3MTUgNDQuNTk3NEwzLjY0NzI2IDQ0LjU5NzZDMTEuMDI1NCA2MC45MzE5IDI1LjEzMzkgNzguMTIyNSAyOS4yNjA2IDgyLjk3ODNMMjkuMjYxMyA4Mi45NzkxQzI5Ljc1OSA4My41NjM1IDMwLjQ4NzEgODMuOTAyNiAzMS4yNTY0IDgzLjkwMjZDMzIuMDI1NyA4My45MDI2IDMyLjc1MzggODMuNTYzNSAzMy4yNTE0IDgyLjk3OTFMMzMuMjUyMiA4Mi45NzgyQzM3LjM3NzIgNzguMTIzMyA1MS40ODU3IDYwLjkzMzUgNTguODY2MyA0NC41OTc3TDU4Ljg2NjMgNDQuNTk3NUM2MC42MjQ4IDQwLjcwMzcgNjEuNTEzNSAzNi40OTgyIDYxLjUxMzUgMzIuMTAzOFYzMi4xMDM3QzYxLjUxMTkgMTUuMjQxMiA0Ny45NTA0IDEuNTAzOTEgMzEuMjU1NiAxLjUwMzkxQzE0LjU2MTYgMS41MDM5MSAxIDE1LjI0MTIgMSAzMi4xMDM4QzEgMzYuNDk4NCAxLjg4OTYyIDQwLjcwMzggMy42NDcxNSA0NC41OTc0Wk00NS40NTI2IDMyLjEwM1YzMi4xMDNDNDUuNDUzNCA0MC4wMzkxIDM5LjA3MjUgNDYuNDc4IDMxLjI1NTYgNDYuNDc4QzIzLjQzOTUgNDYuNDc4IDE3LjA1ODUgNDAuMDM5MSAxNy4wNTg1IDMyLjEwM0MxNy4wNTg1IDI0LjE2NTkgMjMuNDM5NSAxNy43MjcgMzEuMjU1NiAxNy43MjdDMzkuMDcxNiAxNy43MjcgNDUuNDUyNiAyNC4xNjU5IDQ1LjQ1MjYgMzIuMTAzWiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSI2MC43NTk0IiB5MT0iMTMuNTE1MyIgeDI9IjIuNzM2MDMiIHkyPSIxMy40Mjc1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGNDVDMUIiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjQUE0MTQxIiBzdG9wLW9wYWNpdHk9IjAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K",
        "iconImageSize":[58,80],
        "iconImageOffset":[-29,-80],
        "balloonOffset":[100,-40],
        "hideIconOnBalloonOpen":false
    }];


    var init = function () {
        var myMap,
            placemarks = [];

        myMap = new ymaps.Map('map', mapSettings);

        for (var i = 0; i < mapPoints.length; i++) {
            placemarks[i] = new ymaps.Placemark(mapPoints[i].coords, {
                balloonContentHeader: '<h6>' + mapPoints[i].title + '</h6>',
                balloonContentBody: mapPoints[i].address
            }, options[mapPoints[i].type]);

            myMap.geoObjects.add(placemarks[i]);
            myMap.setCenter(placemarks[0].geometry.getCoordinates());
        }



        myMap.setBounds(myMap.geoObjects.getBounds());
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            myMap.behaviors.disable('drag');
        }

        myMap.geoObjects.events.add('click', function (e) {
            var targetObject = e.get('target');

            if (targetObject.geometry.getType() === 'Point') {
                myMap.setCenter(targetObject.geometry.getCoordinates());
            }
        });
        myMap.setZoom(11);

    };


    ymaps.ready(init);




    var mobileMenu = $('.header-menu'),
        header = $('.header'),
        body = $('body'),
        menuToggle = $('.menu-toggle');

    menuToggle.click('click', function () {
        mobileMenu.css('top', header.outerHeight());
        body.toggleClass('mobile-menu_active');
        menuToggle.toggleClass('active');
        mobileMenu.toggleClass('active');
    });

    $(window).on('resize', function () {
        if (body.hasClass('header__menu_active')) {
            mobileMenu.css('top', header.outerHeight());

            if ($(this).width() >= 1200) {
                body.removeClass('mobile-menu_active');
                menuToggle.toggleClass('active');
                menuToggle.toggleClass('active');
            }
        }
    });
});