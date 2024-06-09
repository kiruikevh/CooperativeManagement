'use-strict';
$(function () {
    $("div[data-toggle=collapse]").click(function () {
        $(this).children('span').toggleClass("fa-chevron-down fa-chevron-up");
    });
})