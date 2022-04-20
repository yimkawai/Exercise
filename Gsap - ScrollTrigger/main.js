/* 

gsap.to(".box", {
    x: 100,
    stagger: {each: 1}
});

*/

gsap.to(".box", {
    x: 400,
    stagger: {
        amount: 1, // all .box share 1s
        from: "edges" // center
    }
});