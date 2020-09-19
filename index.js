$(document).ready(function () {
    //!WHEN ICON IS CLICKED REDIRECTS TO TOP OF PAGE!
    $('#myNavItems').hide();
    $('#smDropdownIcon').click(
        function (e) {
            e.preventDefault();
            $('#myNavItems').slideToggle();
        })

    $('.link').click(function() {
        $('#myNavItems').slideToggle();
    })

    $('.experience, .education').hover(
        function() {
            $(this).find('i').removeClass('fa-3x').addClass('fa-4x')
    },  function() {
            $(this).find('i').removeClass('fa-4x').addClass('fa-3x')
        })
})