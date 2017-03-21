$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1,
                pagination: true,
                margin: 10,
                stagePadding: 20
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
    })
    $('.navbar-toggle').click(function(event) {
        console.log($(this).hasClass('collapsed'));
        if ($(this).hasClass('collapsed')) {
            $(this).addClass('menu-show');
            $("#navbar2").css('text-align', 'center');
        } else {
            $(this).removeClass('menu-show');
        }
    });

    $(".mouse").click(function() {
        $('html, body').animate({
            scrollTop: $("#scrollTo").offset().top
        }, 2000);
    });

    var setMinHeight = function(minheight = 0) {
        jQuery('.owl-carousel').each(function(i, e) {
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
});
