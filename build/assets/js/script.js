(function () {
    // Hamburger menu
    const mcroyal = document.querySelector('.mcroyal'),
        nav = document.querySelector('nav'),
        headerLinks = $('nav li a');

    const openHamburgerMenu = () => {
        mcroyal.addEventListener('click', function () {
            mcroyal.classList.toggle('active');
            nav.classList.toggle('active');
            noscroll();
        });
    };
    openHamburgerMenu();

    // Block scroll after open menu

    function noscroll() {
        window.scrollTo(0, 0);
    }

    window.addEventListener('scroll', function () {
        if (mcroyal.classList.contains('active')) {
            noscroll();
        } else {
            window.removeEventListener('scroll', noscroll);
        }
    });


    // Scroll to hash and close menu

    function closemenu() {
        mcroyal.classList.remove('active');
        nav.classList.remove('active');
    }

    $('nav a').on('click', function () {
        const goToSection = "[data-section=" + $(this).attr('class') + "]";
        closemenu();
        $('body, html').animate({
            scrollTop: $(goToSection).offset().top
        })
    })


    // Preloader 

    const preloader = document.querySelector('.preloader');

    preloader.classList.add('visible');
    window.addEventListener('load', function () {
        setTimeout(function () {
            preloader.classList.remove('visible');
        }, 3000);
    });



    // Slider

    $('.slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1800,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1020,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });


}());