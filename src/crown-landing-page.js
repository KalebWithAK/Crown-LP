const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to('.intro-text', {y: '0%', duration: 1, stagger: 0.25});
tl.to('.slider', {y: '-100%', duration: 1, delay: 0.5});
tl.to('.intro', {y: '-100%', duration: 1}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('#action-text', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
tl.to('#crown-img', {x: '250%', duration: 0.5}, "-=1");
tl.fromTo('.copy-text', {opacity: 0}, {opacity: 1, duration: 1}, "-=1");