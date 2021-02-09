document.addEventListener('DOMContentLoaded', () =>{
    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 1, 
    {width: '100%'}, 
    {width: '0%', delay: 5, ease: Expo.easeInOut})

    .fromTo('.bg-video', 2,
    {width: '0%', opacity: 0},
    {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=1')

    .fromTo('.logo', 0.7,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut})

    .fromTo('.nav-list', 0.7,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut})

    .fromTo('.nav-social', 0.7,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut})

    .fromTo('.title', 0.7,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut})

    .fromTo('.desc', 0.7,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut})

    .fromTo('.buttons', 0.7,
    {opacity: 0},
    {opacity: 1, ease: Expo.easeInOut})

    .fromTo('.jersey', 2,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut})
})