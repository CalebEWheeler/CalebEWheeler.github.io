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
})