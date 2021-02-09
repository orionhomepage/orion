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
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.nav-list', 0.7,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.nav-social', 0.7,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.title', 0.7,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.desc', 0.7,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.btn', 0.7,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.btn-secondary', 0.7,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')

    .fromTo('.jersey', 3,
    {y: -50, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5')
})