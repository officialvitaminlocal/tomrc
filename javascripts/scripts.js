var menuTrigger = $(".menu-trigger");

$(menuTrigger).on("click", function() {
    $(this).toggleClass("active");
});