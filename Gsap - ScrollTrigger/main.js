/* 

gsap.to(".box", {
    x: 100,
    stagger: {each: 1}
});

gsap.to(".box", {
    x: 400,
    stagger: {
        amount: 1, // all .box share 1s
        from: "edges" // center, end
    }
});

///////////////////

var animation = gsap.timeline();
animation
    .to(".a", {duration: 2, x: 400})
    .to(".b", {duration: 1, x: 400}, "+=1")
    .to(".c", {duration: 1, x: 400})


    ////////////////////////////

    var animation = gsap.timeline();
    animation
        .to(".a", {duration: 2, x: 400})
        .to(".b", {duration: 1, x: 400}, "-=1") // b前面減1s嘅
        .to(".c", {duration: 1, x: 400})

        //////////////////////////////////



    var animation = gsap.timeline();
    animation
        .to(".a", {duration: 2, x: 400})
        .to(".b", {duration: 1, x: 400}, "-=1") // b前面減1s嘅
        .to(".c", {duration: 1, x: 400}, "-=1")


    ////////////////////////////

    var animation = gsap.timeline();
    animation
        .to(".a", {duration: 2, x: 400})
        .to(".b", {duration: 1, x: 400}, "-=1") // b前面減1s嘅
        .to(".c", {duration: 1, x: 400}, "<")   // 同b timeline 一齊開始

    ////////////////////////////

           */

    var animation = gsap.timeline();
    animation
        .to(".a", {duration: 2, x: 400})
        .to(".b", {duration: 1, x: 400}, 3) // 3秒開始
        .to(".c", {duration: 1, x: 400}, "< 0.5")   // 同b timeline 一齊開始 (遲0.5s)