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

    $('.lgNavbar').children('.link1').click(function (e) {
        e.preventDefault();
        switch ($(this).data("id")) {
            case 1:
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 0,
                }, 800, function () {
                });
                break;
            case 2:
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 767,
                }, 800, function () {
                });
                break;
            case 3:
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 1534,
                }, 800, function () {
                });
                break;
            case 4:
                console.log("experience");
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 2301,
                }, 800, function () {
                });
                break;
            case 5:
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 3068,
                }, 800, function () {
                });
                break;
            case 6:
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 3835,
                }, 800, function () {
                });
                break;
            case 7:
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 4602,
                }, 800, function () {
                });
                break;
            case 8:
                $(this).parent().parent().parent().parent().parent().animate({
                    scrollLeft: 5150,
                }, 800, function () {
                });
                break;
        }
    })


})