ScrollTrigger.defaults({
  toggleActions: "play pause resume reset",
  scrub: 0.5,
  start: "top 300px",
  end: "-=400px",
  // markers: true,
});

gsap.to("#sign1", {
  scrollTrigger: "#work1",
  y: 600,
  ease: "power1.inOut",
});

gsap.to("#sign1", {
  scrollTrigger: {
    trigger: "#work2",
  },
  y: 1600,
  ease: "power1.inOut",
});

gsap.to("#sign1", {
  scrollTrigger: "#work3",
  y: 2600,
  ease: "power1.inOut",
});
