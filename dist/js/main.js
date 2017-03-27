$(document).ready(function() {

    var owl2 = $('#owl-slider');
    owl2.owlCarousel({
        autoplay:true,
        loop: true,
        margin: 0,
        items:1,
        nav:false,
        dots:false
      
    });

    var owl = $('#owl-bottom-slider');
    owl.owlCarousel({
        loop: true,
        margin: 36,
        responsive: {
            0: {
                items: 1,
                pagination: true,
                margin: 12,
                stagePadding: 25
            },
            540: {
                items: 2,
                pagination: true
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }



        }
    });

    owl.find('.owl-item:not(.active)').click(function(event) {
        if ($(this).next().hasClass('active')) {
            owl.trigger('prev.owl.carousel');
        } else if ($(this).prev().hasClass('active')) {
            owl.trigger('next.owl.carousel');
        }

    });


    $('.navbar-toggle').click(function(event) {

        if ($(this).hasClass('collapsed')) {
            $(this).addClass('menu-show');
            $("#navbar2").css('text-align', 'center');
            $('.navbar').css('height', '100%');
            $("#navbar2").css('max-height', '100%');
            $("#navbar2").css('height', '100%');
        } else {
            $(this).removeClass('menu-show');
            $('.navbar').css('height', 'auto');
           
        }
    });

    $(".mouse").click(function() {
        $('html, body').animate({
            scrollTop: $("#scrollTo").offset().top - $(".navbar-fixed-top").height()
        }, 2000);
    });
    var minheight = 0
    var setMinHeight = function() {
        jQuery('#owl-bottom-slider').each(function(i, e) {
            var oldminheight = minheight;
            jQuery(e).find('.owl-item').each(function(i, e) {
                minheight = jQuery(e).height() > minheight ? jQuery(e).height() : minheight;
            });
            jQuery(e).find('.owl-item').css("min-height", minheight + "px");
            jQuery(e).find('.bloken-item').css("min-height", minheight + "px");

            minheight = oldminheight;
        });
    };

    setMinHeight();


    $(document).scroll(function() {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});
