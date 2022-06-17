//Partie Présentation
gsap.from("h1", {duration: 1.5, opacity: 0, yPercent: -100, ease: "power4"})

// gsap.from(".description__text", {duration: 1, opacity: 0, y: -50, ease: "ease-in"})
gsap.from(".description__title", {duration: 1.2, opacity: 0, ease: "none", delay: 0.7})

// gsap.to(".description__title", {duration: 1.5, text: "BienvenuE", ease: "none", delay: 1});

//Partie tarifs
let timeL = gsap.timeline({
    scrollTrigger: {
        trigger: ".prices__block",
        start: "center center+=600px"
    }
});

timeL.from(".prices__image", { y: -100, opacity: 0, duration: 1 })
.from("h3", {x: -100, opacity: 0, duration: 1.5}, "-=1")


//Partie contact
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact__image",
        start: "bottom bottom+=500px"
    }
});

tl.from("form", { x: 200, opacity: 0, duration: 1 })
.from("#contact-btn", {y: 60, opacity: 0, duration: 1.3}, "-=1.2")