$(document).ready(function () {
    $('.big_slider').slick({
        prevArrow: '<img src="img/prev_arrow.png">',
        nextArrow: '<img src="img/next_arrow.png">',
        arrows: true,
        dots: true,
        useCss: true
    });
    $('.menu_button').on("click", function (e) {

        $('.main_mnu').slideToggle();
      
    });
    var $lnk = $('.main_mnu li');
    $lnk.on("click", function (e) {
        e.preventDefault();
        var $mainItem = $(this);      
        var $sub = $mainItem.children('ul');
        $sub.slideToggle();
    });
    $('.show_tabs').click(function(e){
        e.preventDefault();
        $('.tabs_list').slideToggle();
    })
    $('.second_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        edgeFriction: true,
        infinite: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
                },
            {
                breakpoint: 769,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
                }
            }
                    ]
    });
    
    var $tab = $(".tabs ul li");
    var $hot_tab = $('.whats_hot');
    var $designers_tab = $('.designers');
    var $featured_tab = $('.featured');
    var $latest_tab = $('.latest');
    var $selected = $('.selected');

    $designers_tab.hide();
    console.log('hello')
    $featured_tab.hide();
    $latest_tab.hide();
    $tab.on('click', function () {
        $tab.removeClass('selected');
        $(this).addClass('selected');
        var $selected = $('.selected');
        if ($selected.text() == 'what\'s hot') {
            $hot_tab.show();
            $designers_tab.hide();
            $featured_tab.hide();
            $latest_tab.hide();
        } else if ($('.selected').text() == 'designers') {

            $hot_tab.hide();
            $designers_tab.show();
            $featured_tab.hide();
            $latest_tab.hide();
        } else if ($selected.text() == 'featured') {

            $hot_tab.hide();
            $designers_tab.hide();
            $featured_tab.show();
            $latest_tab.hide();
        } else if ($selected.text() == 'latest') {

            $hot_tab.hide();
            $designers_tab.hide();
            $featured_tab.hide();
            $latest_tab.show();
        }
    });
    $('.one_slide').mouseover(function () {
        var $slide = $(this);
        var $shop_circle = $slide.children('button.shop_circle');
        $shop_circle.show();
    });
    $('.one_slide').mouseout(function () {
        var $slide = $(this);
        var $shop_circle = $slide.children('button.shop_circle');
        $shop_circle.hide();
    });

    $('.show_footer').click(function(e){
        e.preventDefault();
       $('.footer').slideToggle();
        $('html, body').animate({
        scrollTop: $('.footer').offset().top
    }, 500);
        
    });
});
