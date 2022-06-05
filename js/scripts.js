(function ($) {
    var options = {
        strings: ['Senior Web Developer', 'Senior Full-stack Developer', 'Senior Front-end Developer', 'Senior WordPress Developer', 'Senior Back-end Developer', 'Senior PHP Developer', 'Senior Vue Developer'],
        typeSpeed: 80,
        startDelay: 80,
        backSpeed: 80,
        loop: true
    };
    var typed = new Typed('.whatami', options);

    "use strict";

    $('[data-toggle="tooltip"]').tooltip();

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery);
