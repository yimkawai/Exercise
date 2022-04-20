gsap.to(".a", {
    duration: 3,
    x: 400,
    ease: "elastic" // bounce.inOut, bounce, bounce.in, back, linear
});

gsap.to(".b", {
    duration: 3,
    x: 400,
    ease: "back(6)"
});