$(document).ready(function () {
    $("#menu-btn").click(function (e) { 
        e.preventDefault();
        $(".menu").toggleClass("menu-active");
    });

    $("#menu-open-btn").click(function (e) { 
        e.preventDefault();
        $(".menu").toggleClass("menu-open");
        $(".menu").removeClass("menu-active");
    });
});