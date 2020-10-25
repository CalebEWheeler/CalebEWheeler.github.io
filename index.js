
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

    //ACCESSING EACH CHILD OF NAVBAR UL'S SO THAT WHEN CLICKED IT WILL LOG A SPECIFIC MESSAGE
    // $('ul').children('.link1').click(function(e) {
    //     e.preventDefault();
    //     if() {
    //         console.log("You clicked the home button!")
    //         // $(this).parent().parent().parent().parent().parent().scrollLeft(0);
    //     }
    //     // else if($(this)) {
    //     //     console.log("You clicked the about button!")
    //     // }
    //
    // })


    // $('#home1').click(function(e) {
    //     e.preventDefault();
    //     $('html').scrollLeft(0)
    //     // let leftPos = $(document).scrollLeft();
    //     // $(".outer-wrapper").animate({scrollLeft: leftPos - 767}, 800);
    // })

})