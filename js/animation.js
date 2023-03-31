gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({});

tl.fromTo('.hero__title', {
    opacity: 0,
    y: 30,
}, {
    opacity: 1,
    y: 0,
    duration: 1
}, 0.6,)
    .fromTo('.hero__paragraph', {
        opacity: 0,
        y: 30,
    }, {
        opacity: 1,
        y: 0,
        duration: 1
    }, 0.8,)
    .fromTo('.hero__btn', {
        opacity: 0,
    }, {
        opacity: 1,
    }, 1,)

//  Hero Scroll Animation
gsap.to('.hero__content', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        scrub: true,
    },
    yPercent: 80,
    scale: 0.5,
    opacity: 0,
})

//  Tools Animation
gsap.from('.tools__title', {
    scrollTrigger: {
        trigger: '.tools__content',
        start: '-30% center',
        end: '+=300px',
        scrub: true,
    },
    opacity: 0,
    transfromOrigin: 'bottom center',
    y: 50,
})

gsap.from('.tools__block-item', {
    scrollTrigger: {
        trigger: '.tools__content',
        start: '-10% center',
        end: '+=350px',
        scrub: true,
    },
    opacity: 0,
    transfromOrigin: 'bottom center',
    ease: "power4.inOut",
    stagger: 1,
    y: 50,
})

//  Projects Animation
gsap.from('.projects__title', {
    scrollTrigger: {
        trigger: '.projects__content',
        start: '-10% center',
        end: '+=300px',
        scrub: true,
    },
    opacity: 0,
    transfromOrigin: 'bottom center',
    y: 50,
})

gsap.from('.projects__block-item', {
    scrollTrigger: {
        trigger: '.projects__content',
        start: '-10% center',
        end: '+=300px',
        scrub: true,
    },
    opacity: 0,
    ease: "power4.inOut",
    transfromOrigin: 'bottom center',
    y: 50,
})



//  Media Animation
gsap.from('.media__title', {
    scrollTrigger: {
        trigger: '.media__content',
        start: '-10% center',
        end: '+=300px',
        scrub: true,
    },
    opacity: 0,
    transfromOrigin: 'bottom center',
    y: 50,
})

gsap.from('.media__block-item', {
    scrollTrigger: {
        trigger: '.media__content',
        start: '-10% center',
        end: '+=300px',
        scrub: true,
    },
    opacity: 0,
    ease: "power4.inOut",
    transfromOrigin: 'bottom center',
    y: 50,
})





