jQuery( function( $ ) {

    // Scroll to top
    $(window).scroll(function() {
        if($(this).scrollTop() > 150) {
            $("#scroll-to-top").fadeIn();
        }
        else {
            $("#scroll-to-top").fadeOut();
        }
    });

    $("#scroll-to-top").click(function() {
        $("html, body").animate({scrollTop:0}, 1000);
    });

    //Mobile Menu Toogle and Overlay
    $('.menu-toggler').click(function() {
        $('.mobile-menu').addClass('display');
        $('#overlay').css('display', 'block');
    });

    $('#overlay').click(function() {
        $('.mobile-menu').removeClass('display');
        $(this).css('display', 'none')
    });

    $('.close-menu-icon').click(function() {
        $('.mobile-menu').removeClass('display');
        $('#overlay').css('display', 'none')
    });

    // Mobile Submenu Toogle
    var topmenu = $('.mobile-menu ul li');

    topmenu.click(function() {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    });

    //Mobile Menu Dropdown
    var submenu = $(".mobile-menu .menu-item-has-children .sub-menu .menu-item-has-children");

    submenu.click(function() {
        $('.mobile-menu ul li').removeClass('active');
        $(this).siblings().removeClass('show');
        $(this).toggleClass('show');
    });

    // Main Menu Search bar
    var icon    =   $('.search-icon');
    var sform   =   $('.site-header .main-search-form');

    icon.click(function() {
        sform.toggle(400);
        icon.toggleClass('display');
    });

    // Sticky Nav on scroll
    var stickyOffset = $('.site-header .site-navigation').offset().top;
    
    $(window).scroll(function() {

        if ($(this).scrollTop() >= 150){
            $('.site-header .site-navigation').addClass('fixed');
        } else {
             $('.site-header .site-navigation').removeClass('fixed');
        } 
    
    });

    // Date Picker
    $( "#datepicker_1" ).datepicker();
    $( "#datepicker_2" ).datepicker();
    $( "#datepicker_3" ).datepicker();
    $( "#datepicker_4" ).datepicker();

    // Frontpage Tabs
    $( "#tabs" ).tabs();
    
});

