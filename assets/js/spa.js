
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
    barba.Dispatcher.on('transitionCompleted', function (currentStatus, oldStatus, container) {
        killEvents();
      }); 
  });
