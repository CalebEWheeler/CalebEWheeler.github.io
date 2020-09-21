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

    $('.formButton').click(function() {

    })
})