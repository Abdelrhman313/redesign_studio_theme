$(document).ready(() => {
    //hide prelaoding section
    setTimeout(() => {
        $('.sk-double-bounce').fadeOut(600);
        $('.prelaoding').fadeOut(1000);
        $('body').addClass('scroll');        
    }, 4000);

    //active to-top-btn
    $('.to-top-btn').click(()=>{
        $('body, html').animate({
            scrollTop: 0,
        }, 600)
    })

    // open sidebar
    $('.navbar-toggler').click(() => {
        $('.sidebar').addClass('show');
    })
    // close sidebar
    $('.sidebar .close-btn').click(() => {
        $('.sidebar').removeClass('show');
    })

    //customizq navbar on scroll
    if (window.pageYOffset >= 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
    
    $(window).scroll(() => {
        //Show/hide arrow-to-top
        if (window.pageYOffset >= 300) {
            $('.arrow-to-top').addClass('visible');
        } else {
            $('.arrow-to-top').removeClass('visible');
        };

        //Edit Navbar
        if (window.pageYOffset >= 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        };
    });

    //Switch active class between links

    navElement = document.querySelectorAll('nav ul li');
    navElement.forEach(element => {
        element.addEventListener('click', () => {
            target = element.dataset.target;
            document.querySelector(`${target}`).scrollIntoView({
                behavior: 'smooth'
            });
        })
    })

    //display statistics Counters
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

    //display owl-carousel
    $('.brands .owl-carousel').owlCarousel({
        items: 5,
        autoplay: 1500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        slideBy: 1,
        loop: true,
        margin: 40,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 5,
            },
            768: {
                items: 3,
            },
            480: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    })

    // dispaly CubePortfolio
    $('#grid-container').cubeportfolio({
        filters: '#filters-container',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 6,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 1,
            options: {
                gapHorizontal: 15,
                gapVertical: 15,
            }
        }],
        defaultFilter: '*',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
    });

    //dispaly fancybox 
    $('[data-fancybox]').fancybox({
        protect: true
    });

    // display client Carousel
    $('.clients-comments .owl-carousel').owlCarousel({
        items: 1,
        autoplay: 1500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        slideBy: 1,
        loop: true,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 1,
            },
            768: {
                items: 1,
            },
            480: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    })

    //display wow plugin
    setTimeout(() => {
        new WOW().init();
    }, 4020);
});