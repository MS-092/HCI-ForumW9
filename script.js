$(document).ready(function () {
    let navbar = $(".navbar");
    $(window).scroll(function () {
        if ($(document).scrollTop() > 20) {
            navbar.addClass("header-scrolled");
        } else {
            navbar.removeClass("header-scrolled");
        }
    });

    let navLinks = $(".nav-link");
    let navCollapse = $(".navbar-collapse.collapse");

    navLinks.on("click", function () {
        navCollapse.removeClass("show");
    });
});
