$('.burger, .overlay').click(function () {
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
});


$(document).ready(function () {
    $(".main-li").on("mouseenter", function () {
        $(this).find(".nav-dropdown").addClass("show-dropdown")
    }).on("mouseleave", function () {
        $(this).find("ul.nav-dropdown.show-dropdown").removeClass("show-dropdown")
    });
});

$(document).ready(function () {
    if ($('.burger').hasClass('clicked')) {
        $('li.main-li').addClass('.accordion');
    }
});