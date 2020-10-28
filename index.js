$(document).ready(function () {
    //!WHEN ICON IS CLICKED REDIRECTS TO TOP OF PAGE!
    $('#icon').click(function (e) {
        e.preventDefault()
    })

    $('#myNavItems').hide();
    $('.link').click(function () {
        $('#myNavItems').slideToggle();
    })

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

    //looking into using offset() to find the element position and
    // utilize that value in place of hard numbers
    $('.smNavbar').children('.link').click(function(e) {
        e.preventDefault();
        // let x = $('#contact').offset();
        // console.log("Top: " + x.top + " Left: " + x.left);
        switch ($(this).data("id")) {
            case 1:
                console.log($('#home').offset());
                // $(this).parent().parent().parent().parent().parent().animate({
                //     scrollTop: $('#home').offset()
                // }, 800, function () {
                // });
                break;
            case 2:
                console.log($('#about').offset())
                // $(this).parent().parent().parent().parent().parent().animate({
                //     scrollTop: $('#about').offset()
                // }, 800, function () {
                // });
                break;
            case 3:
                console.log($('#skills').offset())
                // $(this).parent().parent().parent().parent().parent().animate({
                //     scrollTop: $('#skills').offset()
                // }, 800, function () {
                // });
                break;
            case 4:
                console.log($('#experience').offset())
                // $(this).parent().parent().parent().parent().parent().animate({
                //     scrollTop: $('#experience').offset()
                // }, 800, function () {
                // });
                break;
            case 5:
                console.log($('#education').offset())
                // $(this).parent().parent().parent().parent().parent().animate({
                //     scrollTop: $('#education').offset()
                // }, 800, function () {
                // });
                break;
            case 6:
                console.log($('#recommendations').offset())
                // $(this).parent().parent().parent().parent().parent().animate({
                //     scrollTop: $('#recommendations').offset()
                // }, 800, function () {
                // });
                break;
            case 7:
                console.log($('#portfolio').offset())
                // $(this).parent().parent().parent().parent().parent().animate({
                //     scrollTop: $('#portfolio').offset()
                // }, 800, function () {
                // });
                break;
            case 8:
                console.log($('#contact').offset())
                $(this).parent().parent().parent().parent().animate({
                    scrollTop: $('#contact').offset()
                }, 800, function () {
                });
                break;
        }
    })

    $('.lgNavbar').children('.link1').click(function (e) {
        e.preventDefault();
        switch ($(this).data("id")) {
            case 9:
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 0,
                }, 800, function () {
                });
                break;
            case 10:
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 767,
                }, 800, function () {
                });
                break;
            case 11:
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 1534,
                }, 800, function () {
                });
                break;
            case 12:
                console.log("experience");
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 2301,
                }, 800, function () {
                });
                break;
            case 13:
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 3068,
                }, 800, function () {
                });
                break;
            case 14:
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 3835,
                }, 800, function () {
                });
                break;
            case 15:
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 4602,
                }, 800, function () {
                });
                break;
            case 16:
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 5150,
                }, 800, function () {
                });
                break;
        }
    })


})