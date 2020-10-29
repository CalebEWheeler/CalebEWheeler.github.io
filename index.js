$(document).ready(function () {
    $('#icon').click(function (e) {
        e.preventDefault()
    })
    //-- ADD FUNCTIONALITY TO CLOSE NAVMENU WHEN USER CLICKS ANYWHERE ON THE PAGE --
    $('#myNavItems').hide();
    $('.link').click(function () {
        $('#myNavItems').slideToggle();
    })

    //TEST THIS FOR CLOSING NAVMENU ON MOBILE
    //$(document).click(function() {
    //         box.hide();
    //     });

    $('.education').hover(
        function () {
            $(this).find('i').removeClass('fa-3x').addClass('fa-4x')
        }, function () {
            $(this).find('i').removeClass('fa-4x').addClass('fa-3x')
        })

    $('.toTopOfPage').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, "slow");
        return false;
    })

    $('.smNavbar').children('.link').click(function (e) {
        e.preventDefault();
        let x;
        switch ($(this).data("id")) {
            case 1:
                x = $('#home').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollTop: x.top,
                }, 800, function () {
                });
                break;
            case 2:
                x = $('#about').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollTop: x.top - 48,
                }, 800, function () {
                });
                break;
            case 3:
                x = $('#skills').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollTop: x.top - 48,
                }, 800, function () {
                });
                break;
            case 4:
                x = $('#experience').offset();
                console.log(x.top - 48);
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollTop: x.top - 48,
                }, 800, function () {
                });
                break;
            case 5:
                x = $('#education').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollTop: x.top - 48,
                }, 800, function () {
                });
                break;
            case 6:
                x = $('#recommendations').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollTop: x.top - 48,
                }, 800, function () {
                });
                break;
            case 7:
                x = $('#portfolio').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollTop: x.top - 48,
                }, 800, function () {
                });

                break;
            case 8:
                x = $('#contact').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollTop: x.top - 48,
                }, 800, function () {
                });
                break;
        }
    })

    $('.lgNavbar').children('.link1').click(function (e) {
        e.preventDefault();
        let x;
        switch ($(this).data("id")) {
            case 9:
                x = $('#home1').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: x.left - 200,
                }, 800, function () {
                });
                break;
            case 10:
                x = $('#about1').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: x.left - 200,
                }, 800, function () {
                });
                break;
            case 11:
                x = $('#skills1').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: x.left - 200,
                }, 800, function () {
                });
                break;
            case 12:
                x = $('#experience1').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: x.left - 200,
                }, 800, function () {
                });
                break;
            case 13:
                x = $('#education1').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: x.left - 200,
                }, 800, function () {
                });
                break;
            case 14:
                x = $('#recommendations1').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: x.left - 200,
                }, 800, function () {
                });
                break;
            case 15:
                x = $('#portfolio1').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: x.left - 200,
                }, 800, function () {
                });
                break;
            case 16:
                x = $('#contact1').offset();
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: x.left - 200,
                }, 800, function () {
                });
                break;
        }
    })

})