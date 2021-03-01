ScrollTrigger.defaults({
  toggleActions: "play pause resume reset",
  scrub: 0.5,
  start: "top 300px",
  end: "-=400px",
  // markers: true,
});

const signs = document.querySelectorAll(".sign")
console.log(signs);

gsap.to(signs, {
  scrollTrigger: "#work1",
  y: 600,
  ease: "power1.inOut",
});

gsap.to(signs, {
  scrollTrigger: {
    trigger: "#work2",
  },
  y: 1600,
  ease: "power1.inOut",
});

gsap.to(signs, {
  scrollTrigger: "#work3",
  y: 2600,
  ease: "power1.inOut",
});
