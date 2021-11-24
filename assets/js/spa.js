barba.init({

    sync: true,
    debug: true,
    transitions: [{
        name: 'opacity-transition',
        leave(data) {
            return gsap.to(data.current.container, {
                opacity: 0
            });
        },
        enter(data) {
            return gsap.from(data.next.container, {
                opacity: 0
            });
        }

    }]


});

barba.hooks.beforeEnter((data) => {
    function reload_js(src) {
        $('script[src="' + src + '"]').remove();
        $('<script>').attr('src', src).appendTo('head');
    }
    reload_js('assets/js/main.js');
});

barba.hooks.afterEnter((data) => {
    function reload_js(src) {
        $('script[src="' + src + '"]').remove();
        $('<script>').attr('src', src).appendTo('head');
    }
    reload_js('assets/js/main.js');
});