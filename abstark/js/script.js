$(document).ready(function() {
    $('.slider-1').owlCarousel({
        margin: 10,
        nav: true,
        dots: true,
        items: 1,

    });
    $(".togglecheckbox input").click(function() {
        $(this).parent().toggleClass('active');
        $(".m-1").toggle();
        $(".y-1").toggle();
    });

})