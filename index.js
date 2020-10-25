
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

    $('.lgNavbar').children('.link1').click(function(e) {
        e.preventDefault();
        switch($(this).data("id")) {
            case 1:
                console.log("home");
                $(this).parent().parent().parent().parent().parent().scrollLeft(0);
                break;
            case 2:
                console.log("about");
                $(this).parent().parent().parent().parent().parent().scrollLeft(767);
                break;
            case 3:
                console.log("skills");
                $(this).parent().parent().parent().parent().parent().scrollLeft(1534);
                break;
            case 4:
                console.log("experience");
                $(this).parent().parent().parent().parent().parent().scrollLeft(2301);
                break;
            case 5:
                console.log("education");
                $(this).parent().parent().parent().parent().parent().scrollLeft(3068);
                break;
            case 6:
                console.log("recommendations");
                $(this).parent().parent().parent().parent().parent().scrollLeft(3835);
                break;
            case 7:
                console.log("portfolio");
                $(this).parent().parent().parent().parent().parent().scrollLeft(4602);
                break;
            case 8:
                console.log("contact");
                $(this).parent().parent().parent().parent().parent().scrollLeft(4608);
                break;
        }
    })

})