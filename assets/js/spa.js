$(document).ready(function () {
    barba.init({

        sync: true,
        debug: true,
        transitions: [{
            name: 'fade',
            sync: true,
            once() {},

            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0
                });

            },
            enter(data) {
                return gsap.from(data.next.container, {
                    opacity: 0
                });

            },


        }]

    });


    barba.hooks.beforeEnter((data) => {
        $(window).scrollTop(0);
        function reload_js(src) {
            $('script[src="' + src + '"]').remove();
            $('<script>').attr('src', src).appendTo('head');
        }

        reload_js('assets/js/main.js');
        reload_js('assets/js/imgloader.js');
       
        $('.mobile-menu-toggler').on('click', function (e) {
            $body.toggleClass('mmenu-active');
            $(this).toggleClass('active');
            e.preventDefault();
        });
        reload_js('assets/js/bootstrap.bundle.min.js');
        

    });

    barba.hooks.afterEnter((data) => {
        $(window).scrollTop(0);
        function reload_js(src) {
            $('script[src="' + src + '"]').remove();
            $('<script>').attr('src', src).appendTo('head');
        }
        reload_js('assets/js/main.js');
        reload_js('assets/js/imgloader.js');
        
        $('.mobile-menu-toggler').on('click', function (e) {
            $body.toggleClass('mmenu-active');
            $(this).toggleClass('active');
            e.preventDefault();
        });
        reload_js('assets/js/bootstrap.bundle.min.js');
    });
    
});
