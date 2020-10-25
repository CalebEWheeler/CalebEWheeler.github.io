$(document).onload($(document).scrollLeft(0));
$(document).ready(function () {
    //!WHEN ICON IS CLICKED REDIRECTS TO TOP OF PAGE!
    $('#icon').click(function(e) {
        e.preventDefault()
    })

    $('#myNavItems').hide();
    $('.link').click(function() {
        $('#myNavItems').slideToggle();
    })

    $('.education').hover(
        function() {
            $(this).find('i').removeClass('fa-3x').addClass('fa-4x')
    },  function() {
            $(this).find('i').removeClass('fa-4x').addClass('fa-3x')
        })

    $('.toTopOfPage').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, "slow");
        return false;
    })

    $('#home1').click(function(e) {
        $('#outer-wrapper').scrollLeft(0);
    })
    $('#about1').click(function(e) {
        $('#outer-wrapper').scrollLeft(1500);
    })
    $('#skills1').click(function(e) {
        $('#outer-wrapper').scrollLeft(3000);
    })
    // $("#home1").click(function() {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $("#elementtoScrollToID").offset().top
    //     }, 2000);
    // });
    // $("#about1").click(function() {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $("#elementtoScrollToID").offset().top
    //     }, 2000);
    // });
    // $('#home1').click(function() {
    //
    // })
})